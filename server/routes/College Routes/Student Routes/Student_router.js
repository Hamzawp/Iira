const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const jwt = require("jsonwebtoken");

// Student login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const student = await prisma.user.findUnique({
      where: { email, role: "student" },
    });
    if (!student) {
      return res.status(404).json({ error: "No such Student exists" });
    }
    if (student.password !== password) {
      return res.status(401).json({ error: "Incorrect Password" });
    }
    const token = jwt.sign(
      { id: student.user_id, role: student.role },
      process.env.JWT_SECRET
    );
    res.status(200).json({ ...student, token });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
});
