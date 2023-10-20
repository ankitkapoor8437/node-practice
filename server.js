const express = require("express");
const userRoutes = require('./routes/userRoutes');
const {mongoConnectDb} = require('./connectionFile/connection')
require('dotenv').config();

// Environment Variables 
const databaseUrl = process.env.DATABASE_URL;
const PORT = process.env.PORT;

// App is a handler function
const app = express();
// Middleware
app.use(express.json());

// DB CONNECTION
mongoConnectDb(databaseUrl);

// User Route
app.use('/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
