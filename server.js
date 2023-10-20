const express = require("express");
const mongoose = require("mongoose");

// app is a handler function
const app = express();
app.use(express.json());

const PORT = 9000;

// DB CONNECTION
mongoose.connect('mongodb+srv://ankitkapoor8437:Zxcvbn_8437@crud.arhlgta.mongodb.net/practiceDatabase?retryWrites=true&w=majority')
    .then(() => {
        console.log("DB IS CONNECTED");
    }).catch((error) => { console.log("Mongo Error", error) });

// SCHEMA
const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    job_title: {
        type: String,
    },
    gender: {
        type: String,
    }
});

const User = mongoose.model("user", userSchema);




// ROUTES

// GET
app.get('/api/users/', async (req, res) => {
    try {
        const allUsers = await User.find({});
        return res.status(200).json(allUsers);
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

// POST
app.post('/api/users', async (req, res) => {
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
});

// GET BY ID, PUT, DELETE
app.route("/api/users/:id").get(async (req, res) => {
    try {
        const userById = await User.findById(req.params.id);
        if (!userById) {
            return res.status(404).json({message:"User not found!"}); 
        }
        return res.status(200).json(userById);
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
})
    .patch(async (req, res) => {
        const id = req.params.id;
        const { first_name, last_name, email, gender, job_title } = req.body;

        try {
            // Find the user by id and update the fields
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
    })
    .delete(async (req, res) => {
        const id = req.params.id;
        try {
            const deletedUser = await User.findByIdAndDelete(id);
            if (!deletedUser) {
                return res.status(404).json({message:"User not found!"}); 
            }
            return res.status(200).json({ message: `Successfully deleted user with id: ${id}` });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    });

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
