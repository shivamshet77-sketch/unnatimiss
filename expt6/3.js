const fs = require("fs")
console.log("start");
console.log(fs.readFileSync("data.txt","utf-8"));
console.log("end");


