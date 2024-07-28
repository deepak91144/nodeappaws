const express = require("express");
const router = express.Router();
const authController = require("../controller/auth.controller");
router.get("/products", (req, res) => {
	res.status(200).json({
		dataL: "prosucts",
	});
});

router.post("/signup", authController.signup);

module.exports = router;
