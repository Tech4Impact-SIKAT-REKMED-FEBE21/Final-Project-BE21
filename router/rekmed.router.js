const express = require('express');
const router = express.Router();

const verifyToken = require("../middleware/verifyToken");
const verifyUser = require("../middleware/verifyUser");

const {
  getAllRekmed,
  getRekmed,
  addRekmed,
  deleteRekmed,
  updateRekmed,
  } = require("../controller/rekmed.controller");
  
  router.get("/allRekmed", verifyToken, verifyUser, getAllRekmed);
  router.get("/:nik", verifyToken, verifyUser, getRekmed);
  router.post("/add", verifyToken, verifyUser, addRekmed);
  router.delete("/:nik", verifyToken, verifyUser, deleteRekmed);
  router.put("/:nik", verifyToken, verifyUser, updateRekmed);

module.exports = router;