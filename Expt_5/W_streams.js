const fs =require("fs");
const paste = fs.createWriteStream("output.txt");
paste.write("Hello Everyone\n");
paste.write("Node Streams");
paste.end();
