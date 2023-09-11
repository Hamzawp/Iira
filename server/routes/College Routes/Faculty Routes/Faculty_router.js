const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const jwt = require("jsonwebtoken");
const { sendCollegeEmail } = require("../../../utils/EmailHandler");

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
router.post("/addOne", async (req, res) => {
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
router.post("/addBulk", async (req, res) => {
  try {
    const { students, role } = req.body;
    const studentsWithPassword = students.map((student) => ({
      ...student,
      password: (Math.random() + 1).toString(36).substring(7),
      role,
    }));
    const createdStudents = await prisma.user.createMany({
      data: studentsWithPassword,
    });
    res.status(200).json({ ...createdStudents, msg: "Students added" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
});

module.exports = router;
