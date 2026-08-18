const fs = require("fs");
const reader = fs.createReadStream("sample.txt");
reader.on("data",(chunk)=>{
    console.log(chunk.toString());
});

reader.on("end",()=>{
    console.log("reading complete");
    
});