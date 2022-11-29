const express = require('express');
const router = express.Router();

const verifyToken = require("../middleware/verifyToken");
const verifyUser = require("../middleware/verifyUser");

const {  
  getRekmed,
  getPasien
} = require("../controller/pasien.controller");

router.get("/rekmed/:nik", verifyToken, getRekmed);
router.get("/:nik", verifyToken, getPasien);


module.exports = router;