const express = require("express");
const router = express.Router();
const {
    getUsers,
    createUser,
    getUserById,
    updateUserById,
    deleteUserById } = require('../controllers/userController')

// ROUTES

// GET
router.get('/api', getUsers);

// POST
router.post('/api', createUser);

// GET BY ID, PUT, DELETE
router.route("/api/:id").get(getUserById)
    .patch(updateUserById).delete(deleteUserById);

module.exports = router;