const express = require('express');
const router = express.Router();

const verifyToken = require("../middleware/verifyToken");
const verifyUser = require("../middleware/verifyUser");

const {
	register,
	login,
	getProfile,
	updateProfile,
	getAllUser,
	getUser,
	updateUser,
	deleteUser,
} = require("../controller/user.controller");

router.post("/register", register);
router.post("/login", login);

router.get("/profile", verifyToken, getProfile);
router.put("/profile", verifyToken, updateProfile);

router.get("/allUser", verifyToken, verifyUser, getAllUser);
router.get("/:id", verifyToken, verifyUser, getUser);
router.put("/:id", verifyToken, verifyUser, updateUser);
router.delete("/:id", verifyToken, verifyUser, deleteUser);

module.exports = router;
