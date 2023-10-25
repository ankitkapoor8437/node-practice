const jwt = require("jsonwebtoken");
require('dotenv').config();

const secretKey = process.env.SECRET_KEY;


const setUser = (user) => {
    return jwt.sign(
        {
            _id: user.id,
            email: user.email
        }, secretKey);
}

const getUser = (token) => {
    if (!token) return null;
    try {
        return jwt.verify(token, secretKey);
    } catch (error) {
        return null;
    }

}


module.exports = { setUser, getUser };