const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//  Reset Password
router.post("/setPassword", async (req, res) => {
  try {
    const { email, oldPassword, newPassword } = req.body;
    const user = await prisma.user.findUnique({
      where: { email },
    });
    if (!user) {
      return res.status(404).json({ error: "No such User exists" });
    }
    if (user.password !== oldPassword) {
      return res.status(401).json({ error: "Incorrect Password" });
    }
    const updatedUser = await prisma.user.update({
      where: { email },
      data: { password: newPassword },
    });
    res.status(200).json({ msg: "Password Updated Successfully" });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error", message: err });
  }
});

//  get A User
router.get("/getOne", async (req, res) => {
  try {
    const { user_id } = req.body;
    const user = await prisma.user.findUnique({
      where: { user_id },
    });
    if (!user) {
      return res.status(404).json({ error: "No such User exists" });
    }
    res.status(200).json({ ...user });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error", message: err });
  }
});

module.exports = router;
