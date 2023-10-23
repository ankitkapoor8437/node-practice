const express = require("express");
const router = express.Router();
const {
    getUsers,
    createUser,
    getUserById,
    updateUserById,
    deleteUserById,
    handleUserSignUp,
    handleUserLogIn
 } = require('../controllers/userController')

// ROUTES

// GET
router.get('/api/signup', getUsers);

// POST
router.post('/api/signup', handleUserSignUp);
router.post('/api/login', handleUserLogIn);

// GET BY ID, PUT, DELETE
router.route("/api/:id").get(getUserById)
    .patch(updateUserById).delete(deleteUserById);

module.exports = router;