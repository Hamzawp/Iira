const express = require("express");
const app = express();

require("dotenv").config();

app.use(express.static("public"));
app.use(express.json());
app.use(require("cors")());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/college", require("./routes/College Routes/routes"));

const port = process.env.PORT || 8000;
app.listen(port, async () =>
  console.log(`Server is listening on port ${port}..................`)
);
