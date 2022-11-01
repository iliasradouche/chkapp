const express = require("express");
const router = express.Router();

router.get("/"),
  (req, res) => {
    res.send({ data: "This is your " });
  };

router.get("/:id"),
  (req, res) => {
    res.send({ data: "This is your " });
  };

router.post("/", (req, res) => {
  res.send({ data: "order creer" });
});

router.put("/", (req, res) => {
  res.send({ data: "order modifier" });
});

router.delete("/:id", (req, res) => {
  res.send({ data: "order supprimer" });
});

module.exports = router;
