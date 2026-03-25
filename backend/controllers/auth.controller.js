//  backend/feature-adding
const usermodel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function registerUser(req, res) {

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: "All fields are required" })
    }

    const IsUser = await usermodel.findone({ email });

    if (IsUser) {
        return res.status(400).json({ message: "User already exists" })
    }

    const hasedpassword = await bcrypt.hash(password, 10);

    const user = new usermodel({
        name,
        email,
        password: hasedpassword
    });

    await user.save();

    const token = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
    );

    res.cookie("token", token, {
        httpOnly: true,
        secure: false,
        samesite: "lax",
        maxage: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(201).json({
        message: "User registered successfully",
        user: {
            id: user._id,
            name: user.name,
            email: user.email
        },
        token
    });

}