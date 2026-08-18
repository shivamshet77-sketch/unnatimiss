const http =require("http");
const server = http.createServer((req,res)=>{
    res.write("Welcome to node.js Server");
    res.end();})
    server.listen(3000);
    console.log("Server is Running...");
    