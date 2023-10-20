
const User = require('../models/userModel');

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

const createUser = async (req, res) => {
    const { first_name, last_name, email, job_title, gender } = req.body;;

    if (!first_name || !last_name || !gender || !email || !job_title) {
        return res.status(400).json({ message: "All fields are required!" });
    }

    try {
        const createUser = await User.create({
            first_name,
            last_name,
            email,
            job_title,
            gender
        });

        return res.status(201).json(createUser);
    } catch (error) {
        console.error("Error creating user:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

const updateUserById = async (req, res) => {
    const id = req.params.id;
    const { first_name, last_name, email, gender, job_title } = req.body;

    try {
        const dataToUpdate = req.body;
        await User.findByIdAndUpdate(id, {
            first_name,
            last_name,
            gender,
            job_title
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
    createUser,
    getUserById,
    updateUserById,
    deleteUserById,
}