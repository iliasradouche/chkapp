const express = require("express");
const router = express.Router();

router.get("/"),
  (req, res) => {
    res.send({ data: "This is your data" });
  };

router.post("/", (req, res) => {
  res.send({ data: "Cera creer" });
});

router.put("/", (req, res) => {
  res.send({ data: "Cera modifier" });
});

router.delete("/", (req, res) => {
  res.send({ data: "Cera supprimer" });
});

module.exports = router;
