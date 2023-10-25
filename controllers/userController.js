
const User = require('../models/userModel');
// const { v4: uuidv4 } = require("uuid");
const {setUser, getUser} = require('../service/auth')

// Authentication

// SignUp
const handleUserSignUp = async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ message: "All fields are required!" });
    }

    try {
        const createUser = await User.create({
            name,
            email,
            password
        });

        return res.status(201).json(createUser);
    } catch (error) {
        console.error("Error creating user:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    };
}

// Login
const handleUserLogIn = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email, password });
        if (!user) {
            return res.status(400).json({ message: "Invalid Username or password" });
        }
        // const sessionId = uuidv4();
        const token = setUser(user);
        res.cookie("uid", token);
        return res.status(200).json({ message: token });
    } catch (error) {
        console.error("Error creating user:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    };
}

// Normal Routes
const getUsers = async (req, res) => {
    try {
        const allUsers = await User.find({});
        return res.status(200).json(allUsers);
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

const getUserById = async (req, res) => {
    try {
        const userById = await User.findById(req.params.id);
        if (!userById) {
            return res.status(404).json({ message: "User not found!" });
        }
        return res.status(200).json(userById);
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
};


const updateUserById = async (req, res) => {
    const id = req.params.id;
    const { name, email, password } = req.body;

    try {
        const dataToUpdate = req.body;
        await User.findByIdAndUpdate(id, {
            name,
            email,
            password
        });

        if (!dataToUpdate) {
            return res.status(404).json({ message: "User not found" });
        }
        console.log(dataToUpdate);
        return res.status(200).json(dataToUpdate);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

const deleteUserById = async (req, res) => {
    const id = req.params.id;
    try {
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found!" });
        }
        return res.status(200).json({ message: `Successfully deleted user with id: ${id}` });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};



module.exports = {
    getUsers,
    getUserById,
    updateUserById,
    deleteUserById,

    handleUserSignUp,
    handleUserLogIn
}