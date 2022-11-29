const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/verifyToken");
const verifyUser = require("../middleware/verifyUser");


// untuk data user dokter
const {
    getAllDokter,
    getDokter,
    addDokter,
    deleteDokter,
    updateDokter
} = require("../controller/dokter.controller");

router.get("/allDokter", verifyToken, verifyUser, getAllDokter);
router.get("/:nip", verifyToken, verifyUser, getDokter);
router.post("/addDokter", verifyToken, verifyUser, addDokter);
router.delete("/:nip", verifyToken, verifyUser, deleteDokter);
router.put("/:nip", verifyToken, verifyUser, updateDokter);

const {
    getAllPasien,
    getPasien,
    addPasien,
    deletePasien,
    updatePasien,
  } = require("../controller/pasien.controller");
  
  router.get("/pasien/all", verifyToken, verifyUser, getAllPasien);
  router.get("/pasien/:nik", verifyToken, verifyUser, getPasien);
  router.post("/addPasien", verifyToken, verifyUser, addPasien);
  router.delete("/pasien/:nik", verifyToken, verifyUser, deletePasien);
  router.put("/pasien/:nik", verifyToken, verifyUser, updatePasien);

module.exports = router;

