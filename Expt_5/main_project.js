const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/Home") {
    res.end("Home Page");
  } else if (req.url === "/about") {
    const reader = fs.createReadStream("student.txt");

    reader.on("data", (chunk) => {
      console.log(chunk.toString());
      res.write(chunk);
    });
  } else if (req.url === "/contact") {
    res.end("Contact Page");
  } else if (req.url === "/") {
    res.end("Got info");
    console.log(req.headers);
  } else {
    res.end("Error 404.");
  }
});

process.stdin.on("data",(data)=>{
    process.stdout.write("server is running on Port"+ data);});

process.stderr.write("invalid input");

server.listen(3000);
