const http = require('http');
const options ={
    hostname:"localhost",
    port:"3000",
    path:"/",
    method:"GET",
    headers:{apikey:'123'},
};
const req =http.request(options,(res)=>{
res.on("data",(data)=>{
    console.log(data.toString());
    
})});
req.end();