const { error } = require("console");
const fs = require("fs");

// Sync call Write
// fs.writeFile('./text.txt', "Hey", (error)=>{
//     console.log(error);
// });

// Append
// fs.appendFileSync('./text.txt', "\n" + new Date().getDate().toLocaleString() + "testing this functionality");

// read
fs.readFile("./text.txt", "utf-8", (error, result) => {
    if (error) {
        console.error(error); 
    } else {
        console.log(result); 
    }
});

// fs.cpSync('./text.txt', './copy.txt');

// fs.unlinkSync('./text.txt');

console.log(fs.statSync("./copy.txt"));
fs.mkdirSync("my-file/a", {recursive:true});


