const express = require("express");
const userRoutes = require('./routes/userRoutes');
const projectData = require('./routes/projectRoutes');
const { mongoConnectDb } = require('./connectionFile/connection')
const cookieParser = require("cookie-parser");
const { restrictToLoggedInUserOnly } = require('./middlewares/auth')
require('dotenv').config();


// Environment Variables 
const databaseUrl = process.env.DATABASE_URL;
const PORT = process.env.PORT;


// App is a handler function
const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));


// DB CONNECTION
mongoConnectDb(databaseUrl);

// User Route
app.use('/data', projectData);
app.use('/users', userRoutes);



app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
    console.log(`...Requesting for DB Connection`);

});
