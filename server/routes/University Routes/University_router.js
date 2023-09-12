const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const jwt = require("jsonwebtoken");
const { checkForUniversityFaculty } = require("../../middlewares/authMiddle");
const { sendUniversityEmail } = require("../../utils/EmailHandler");

// Uinverty login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const university = await prisma.user.findUnique({
      where: { email, role: "university" },
    });
    if (!university) {
      return res.status(404).json({ error: "No such University exists" });
    }
    if (university.password !== password) {
      return res.status(401).json({ error: "Incorrect Password" });
    }
    const token = jwt.sign(
      { id: university.user_id, role: university.role },
      process.env.JWT_SECRET
    );
    res.status(200).json({ ...university, token });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
});

// Add SPOC to University One by One
router.post("/addOne", async (req, res) => {
  try {
    const { email, first_name, last_name, dob, role } = req.body;
    const password = (Math.random() + 1).toString(36).substring(7);
    const spoc = await prisma.user.create({
      data: {
        email,
        first_name,
        last_name,
        password,
        dob,
        role,
      },
    });
    sendUniversityEmail(spoc);
    res.status(200).json({ ...spoc, msg: "Email sent to SPOC" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
});

// Add SPOC to University in Bulk
/**
 * Schema for spocs
 * spoocs = [
 * {
 *    email: "
 *    first_name: "
 *    last_name: "
 *    dob: "
 *    college_name: "
 * }
 * ]
 */
router.post("/addBulk", checkForUniversityFaculty, async (req, res) => {
  try {
    // console.log(req.user);
    const { spocs } = req.body;
    const spocsWithPassword = spocs.map((spoc) => ({
      ...spoc,
      password: (Math.random() + 1).toString(36).substring(7),
    }));

    for (let i = 0; i < spocsWithPassword.length; i++) {
      const college = await prisma.colleges.create({
        data: {
          // college_id: 11,
          college_name: spocsWithPassword[i].college_name,
          university_id: req.user.university_id,
        },
      });

      // console.log(college);

      const user = await prisma.user.create({
        data: {
          email: spocsWithPassword[i].email,
          first_name: spocsWithPassword[i].first_name,
          last_name: spocsWithPassword[i].last_name,
          password: spocsWithPassword[i].password,
          dob: new Date(),
          role: "SPOC",
          college_id: college.college_id,
        },
      });

      sendUniversityEmail({
        ...user,
        college_name: college.college_name,
      });
    }
    res.status(200).json({ msg: "Emails sent to all SPOCs" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
});

module.exports = router;
