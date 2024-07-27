const express = require("express");
const router = express.Router();
router.get("/products", (req, res) => {
	res.status(200).json({
		dataL: "prosucts",
	});
});

module.exports = router;
