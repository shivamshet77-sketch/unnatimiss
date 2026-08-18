const fs =require("fs");
fs.writeFile("file_io.txt","welcome to node.js",(err)=>{
    if(err)
        console.log(err);
    else
        console.log("file created successfully.");});
             
