const { getUser } = require("../service/auth")

const restrictToLoggedInUserOnly = (req, res, next) => {

    const userId = req.cookies?.uid;
    if (!userId) {
        return res.status(400).redirect("/api/login");
    }

    const user = getUser(userId);
    if (!user) {
        return res.status(400).redirect("/api/login");
    }

    req.user = user;
    next();
};

module.exports = { restrictToLoggedInUserOnly };