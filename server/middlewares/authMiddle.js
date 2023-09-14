const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const jwt = require("jsonwebtoken");

exports.checkForSPOC = async (req, res, next) => {
  try {
    // console.log(req.headers);
    const token = req.headers.authtoken;
    console.log(token);
    if (!token) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const payload = jwt.verify(token, process.env.JWT_SECRET);
    // console.log(payload);
    const spoc = await prisma.user.findUnique({
      where: { user_id: payload.id, role: "SPOC" },
      // where: { user_id: payload.id },
    });
    // console.log(spoc);
    if (!spoc) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    req.user = spoc;
    next();
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
};

exports.checkForCollegeFaculty = async (req, res, next) => {
  try {
    // console.log(req.headers);
    const token = req.headers.authtoken;
    console.log(token);
    if (!token) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const payload = jwt.verify(token, process.env.JWT_SECRET);
    // console.log(payload);
    const spoc = await prisma.user.findUnique({
      where: { user_id: payload.id, role: "college_faculty" },
      // where: { user_id: payload.id },
    });
    // console.log(spoc);
    if (!spoc) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    req.user = spoc;
    next();
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
};

exports.checkForUniversityFaculty = async (req, res, next) => {
  try {
    // console.log(req.headers);
    const token = req.headers.authtoken;
    console.log(token);
    if (!token) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const payload = jwt.verify(token, process.env.JWT_SECRET);
    // console.log(payload);
    const university_faculty = await prisma.user.findUnique({
      where: { user_id: payload.id, role: "university" },
      // where: { user_id: payload.id },
    });
    // console.log(spoc);
    if (!university_faculty) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    req.user = university_faculty;
    const university = await prisma.Universities.findUnique({
      where: { uni_head_id: university_faculty.user_id },
    });
    req.user.university_id = university.uni_id;
    // console.log(req.user);
    next();
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
};
