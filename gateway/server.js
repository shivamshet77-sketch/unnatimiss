const http =require("http");
const server = http.createServer((req,res)=>{
    const key = req.headers["apikey"];
    if(key !=="123"){
        res.statusCode=401;
        res.end("Access Denied");
        return;}
        res.end("Welcome");
    });
    server.listen(3000);
