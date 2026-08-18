const express =require("express")
const data= require("./student.js")
const app = express();
const fs = require('fs');
const port = 3000;

app.get('/',(req,res)=>{
    
   
    
    let s_data = fs.readFileSync("student.txt","utf8")
    const name = data.getName("\nSoham Gaonkar");


    res.send("Welcome"+"<br>"+'Student Name :'+name+"<br>"+" \n Data => \n"+s_data);
    fs.appendFileSync("student.txt",name);
    
    
})




app.listen(port,()=>{
    console.log("Server is running"+" \nName is Appended");
})