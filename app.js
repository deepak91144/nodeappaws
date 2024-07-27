const express = require("express");
const app = express();
const port = 3000;
const authRoutes = require("./route/auth.route");
const morgan = require("morgan");
app.use(morgan("tiny"));
app.use(authRoutes);
app.get("/", (req, res) => {
	console.log("working");
	res.status(200).json({
		data: "working",
	});
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
