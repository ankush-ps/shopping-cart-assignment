const cors = require("cors");
const express = require("express");

const app = express();

const PORT = "5001";

app.use(cors());

app.use(express.static("static"));

app.listen(PORT, () => {
  console.log("Image server started at: ", PORT);
});
