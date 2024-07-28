const express = require("express");
const router = express.Router();
router.get("/products", (req, res) => {
	res.status(200).json({
		dataL: "prosucts",
	});
});

router.get("/users", (req, res) => {
	res.status(200).json({
		dataL: "users updated",
	});
});

module.exports = router;
