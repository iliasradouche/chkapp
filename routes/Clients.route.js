const express = require("express");
const router = express.Router();
const ClientsController = require("../controllers/client.controllers");

router.get("/", ClientsController.getAll);
router.get("/:id", ClientsController.getOneById);
router.post("/", ClientsController.add);
router.put("/:id", ClientsController.edit);
router.delete("/:id", ClientsController.delete);

module.exports = router;
