const express = require("express");
const app = express();
require("dotenv").config();

const authRoutes = require("./route/auth.route");
const morgan = require("morgan");
require("./config/db-config");
app.use(morgan("tiny"));
app.use(authRoutes);
app.get("/", (req, res) => {
	console.log("working");
	res.status(200).json({
		data: "working",
	});
});
app.listen(3000, () =>
	console.log(`Example app listening on porggrtgtrtt ${3000}!`)
);
