const mongoose = require("mongoose");

// DB CONNECTION
const mongoConnectDb = (url) => {
    return mongoose.connect(url)
        .then(() => {
            console.log("DB IS CONNECTED");
        }).catch((error) => { console.log("Mongo Error", error) });
}

module.exports = { mongoConnectDb };