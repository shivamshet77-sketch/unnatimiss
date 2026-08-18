const fs = require("fs");

fs.readFile("file_io.txt","utf8",(err,data)=>{
    if(err)
        console.log(err);
    else
        console.log(data);
        
        
})