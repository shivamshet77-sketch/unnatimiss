const fs = require("fs");

fs.writeFileSync("student.txt", "hello");
fs.appendFileSync("student.txt"," Everyone.");
const data = fs.readFileSync("student.txt", "utf8");
console.log(data);

//  
// // fs.unlinkSync("student.txt");
//  const u =fs.existsSync("kids.txt");
//  console.log(u);

 fs.renameSync("student.txt", "student1.txt");
