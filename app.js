const express = require("express");
const app = express();
require("dotenv").config();

const authRoutes = require("./route/auth.route");
const morgan = require("morgan");
require("./config/db-config");
app.use(express.json());
app.use(morgan("tiny"));
app.use(authRoutes);
app.get("/", (req, res) => {
	console.log("working");
	res.status(200).json({
		data: "working",
	});
});

app.listen(process.env.PORT, () =>
	console.log(`Example app listening on port ${process.env.PORT}!`)
);
