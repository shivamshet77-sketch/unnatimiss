// const http = require("http")
// const registration = require("./registration");

// const server =http.createServer((req,res)=>{

//     if(req.url==="/home"){
//         res.end(`<h1>Welcome to Community Sports Club</h1><br> visit this <b>/registration</b> to see registered users.`)
//     }
//     else if(req.url==="/registration"){
        
//         res.end(`<h1>Registered List</h1><br>
//             Name:${registration.name}<br>
//             Age:${registration.age}<br>
//             Sport:${registration.sport}<br>
//             `)
//     }
//     else{res.end(`<h1>Page not found</h1>`)}
// })

// server.listen(3000,()=>{
//     console.log("Server is Running");
    
// })



const express = require("express");
const registration = require("./registration");
const app = express();

app.get("/home",(req,res)=>{
    res.end(`<h1>Community Sports Club</h1><br>
    <br>Copy this <b>/registration</b> url to see the registered participants.` )
})

app.get("/registration",(req,res)=>{
    res.end(`Name:${registration.name}`)
})

app.listen(3000,()=>{
    console.log("Server is running")
})