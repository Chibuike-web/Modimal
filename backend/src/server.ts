import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bcrypt from "bcrypt";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 2222;

app.use(cors());
app.use(express.json());

type User = {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
};
let users: User[] = [];

app.post("/signup", async (req, res) => {
	const { firstName, lastName, email, password } = req.body;
	const saltRounds = 10;
	const hashedPassword = await bcrypt.hash(password, saltRounds);
	const emailExist = users.find((u) => u.email === email);
	if (emailExist) {
		res.status(404).json({ message: "Email already exist" });
		return;
	}

	const newUser = {
		firstName,
		lastName,
		email,
		password: hashedPassword,
	};
	users.push(newUser);
	res.status(201).json({ message: "You have successfully created an account" });
});

app.listen(PORT, () => {
	console.log(`Server listening on http://localhost:${PORT}`);
});
