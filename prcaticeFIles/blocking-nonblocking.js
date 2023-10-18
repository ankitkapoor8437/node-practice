const fs = require("fs");

console.log("1");
const result = fs.readFileSync("./random.txt", "utf-8");
console.log(result);
console.log("2");


console.log("1");
fs.readFile("./random.txt", "utf-8", (error, result)=>{
    if (error) {
        console.error(error);
    }
    else(
        console.log(result)
    )
})
console.log("2");

const os = require("os");

console.log(os.cpus().length);