const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const jwt = require("jsonwebtoken");
const { sendCollegeEmail } = require("../../../utils/EmailHandler");

// SPOC login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const spoc = await prisma.user.findUnique({
      where: { email, role: "SPOC" },
    });
    if (!spoc) {
      return res.status(404).json({ error: "No such SPOC exists" });
    }
    if (spoc.password !== password) {
      return res.status(401).json({ error: "Incorrect Password" });
    }
    const token = jwt.sign(
      { id: spoc.user_id, role: spoc.role },
      process.env.JWT_SECRET
    );
    res.status(200).json({ ...spoc, token });
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

    await studentsWithPassword.forEach(
      async (student) => await sendCollegeEmail(student)
    );
    res.status(200).json({ msg: "Emails sent to students" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
});

// Testing
router.get("/test", async (req, res) => {
  try {
    const data = [
      {
        email: "user1@example.com",
        first_name: "John",
        last_name: "Doe",
        password: "password123",
        dob: "1990-05-15T00:00:00.000Z",
        role: "admin",
      },
      {
        email: "user2@example.com",
        first_name: "Jane",
        last_name: "Smith",
        password: "securePass",
        dob: "1985-08-20T00:00:00.000Z",
        role: "university",
      },
      {
        email: "user3@example.com",
        first_name: "Alice",
        last_name: "Johnson",
        password: "samplePassword",
        dob: "1992-03-10T00:00:00.000Z",
        role: "SPOC",
      },
      {
        email: "user4@example.com",
        first_name: "Bob",
        last_name: "Brown",
        password: "secretPass123",
        dob: "1988-11-25T00:00:00.000Z",
        role: "college_faculty",
      },
      {
        email: "user5@example.com",
        first_name: "Eva",
        last_name: "Wilson",
        password: "strongPassword",
        dob: "1995-07-05T00:00:00.000Z",
        role: "student",
      },
      {
        email: "user6@example.com",
        first_name: "Michael",
        last_name: "Davis",
        password: "mypass123",
        dob: "1993-02-12T00:00:00.000Z",
        role: "admin",
      },
      {
        email: "user7@example.com",
        first_name: "Sarah",
        last_name: "Taylor",
        password: "secure123",
        dob: "1991-09-30T00:00:00.000Z",
        role: "SPOC",
      },
      {
        email: "user8@example.com",
        first_name: "David",
        last_name: "Lee",
        password: "testpass",
        dob: "1987-04-17T00:00:00.000Z",
        role: "college_faculty",
      },
      {
        email: "user9@example.com",
        first_name: "Olivia",
        last_name: "Anderson",
        password: "password456",
        dob: "1994-12-08T00:00:00.000Z",
        role: "student",
      },
      {
        email: "user10@example.com",
        first_name: "Daniel",
        last_name: "Martin",
        password: "mysecurepass",
        dob: "1998-06-28T00:00:00.000Z",
        role: "university",
      },
    ];

    await prisma.user.createMany({ data });
    res.status(200).json({ message: "SPOC Router is working fine" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
});

module.exports = router;
