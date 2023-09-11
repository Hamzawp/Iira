const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const jwt = require("jsonwebtoken");

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
router.post("/addBulk", async (req, res) => {
  try {
    const { spocs } = req.body;
    const spocsWithPassword = spocs.map((spoc) => ({
      ...spoc,
      password: (Math.random() + 1).toString(36).substring(7),
    }));
    const createdSpocs = await prisma.user.createMany({
      data: spocsWithPassword,
    });
    createdSpocs.forEach((spoc) => sendUniversityEmail(spoc));
    res.status(200).json({ msg: "Emails sent to all SPOCs" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
});

module.exports = router;
