const fs= require("fs");
console.log("start");
fs.readFile("data.txt","utf-8",(err, data)=>{
    if(err){
        console.log(err);
        err;
    }
    console.log(data);
    
})
console.log("end");
