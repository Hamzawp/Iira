const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const jwt = require("jsonwebtoken");
const { sendCollegeEmail } = require("../../../utils/EmailHandler");
const { checkForCollegeFaculty } = require("../../../middlewares/authMiddle");

// Faculty login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const faculty = await prisma.user.findUnique({
      where: { email, role: "college_faculty" },
    });
    if (!faculty) {
      return res.status(404).json({ error: "No such Faculty exists" });
    }
    if (faculty.password !== password) {
      return res.status(401).json({ error: "Incorrect Password" });
    }
    const token = jwt.sign(
      { id: faculty.user_id, role: faculty.role },
      process.env.JWT_SECRET
    );
    res.status(200).json({ ...faculty, token });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
});

// Add Student to College One by One
router.post("/addOne", checkForCollegeFaculty, async (req, res) => {
  try {
    const { email, first_name, last_name, dob, role } = req.body;
    const password = (Math.random() + 1).toString(36).substring(7);
    const student = await prisma.user.create({
      data: {
        email,
        first_name,
        last_name,
        password,
        dob,
        role,
      },
    });
    sendCollegeEmail(student);
    res.status(200).json({ ...student, msg: "Email sent to student" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
});

// Add Student to College in Bulk
router.post("/addBulk", checkForCollegeFaculty, async (req, res) => {
  try {
    // console.log(req.user);
    const { users, role } = req.body;
    console.log(users, role);
    const usersWithPassword = users.map((student) => ({
      ...student,
      password: (Math.random() + 1).toString(36).substring(7),
      role,
      dob: new Date(),
      college_id: req.user.college_id,
    }));
    const createdusers = await prisma.user.createMany({
      data: usersWithPassword,
    });

    for(let i=0; i<usersWithPassword.length; i++){

      const user = await prisma.user.create({
        data:{
          ...usersWithPassword[i]
        }
      })

      const college = await prisma.colleges.findUnique({
        where:{
          college_id: req.user.college_id
        }
      })

      // console.log(college)

      sendCollegeEmail({
        ...user, college_name: college.college_name
      })
    }
    res.status(200).json({ msg: "Emails sent to users" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
});

module.exports = router;
