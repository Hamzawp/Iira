const router = require("express").Router();

router.use("/SPOC", require("./SPOC Routes/SPOC_router"));
router.use("/faculty", require("./Faculty Routes/Faculty_router"));
// router.use("/student", require("./Student Routes/Student_router"));
module.exports = router;
