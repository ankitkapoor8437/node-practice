const express = require("express");

// app is a handler function
const app = express();

app.get('/',(req,res)=>{
    res.send("Created a homepage handler");
});

app.get('/about',(req,res)=>{
    res.send("Created a about handler");
});


const PORT = 9000;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
  