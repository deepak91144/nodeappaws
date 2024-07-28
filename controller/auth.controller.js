const authModel = require("../model/auth");

authModel;
exports.signup = async (req, res) => {
	const { name, email, password } = req.body;
	const user = new authModel(req.body);
	const newUser = await user.save();
	return res.status(201).json({
		message: "user created",
		user: newUser,
	});
};
