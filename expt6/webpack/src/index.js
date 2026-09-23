const getStudent = require("./student");
const generateReport = require("./report");

const student = getStudent();
const report = generateReport(student);
console.log(report);