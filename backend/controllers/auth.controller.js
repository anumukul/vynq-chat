
export const logout = (req, res) => {
	try {
		res.cookie("jwt", "", {
			maxAge: 0,
			httpOnly: true,
			sameSite: "none",
			secure: true,
		});

		res.status(200).json({ message: "Logged out successfully" });
	} catch (error) {
		console.log("Error in logout controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};
