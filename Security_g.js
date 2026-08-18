const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function securityGate() {
  rl.question("\nEnter Visitor Name (or 'exit'): ", function (visitorName) {
    if (visitorName.toLowerCase() === "exit") {
      console.log("\nSecurity Gate Closed.");
      rl.close();
      return;
    }

    
    rl.question(
      "Which Department do you want to visit? ",
      function (department) {
        console.log("\nVisitor Name :", visitorName);
        console.log("Department   :", department);

        
        rl.question("\nPrincipal - Allow Entry? (Y/N): ", function (answer) {
          if (answer.toUpperCase() === "Y") {
            console.log("\nACCESS GRANTED");
            console.log("Welcome", visitorName);

            
            const visitorDetails =
              "Name: " + visitorName + " | Department: " + department + "\n";

            fs.appendFile("visitor.txt", visitorDetails, function (err) {
              if (err) {
                console.log("Error saving visitor details.");
              } else {
                console.log("Visitor details saved.");
              }

              securityGate();
            });
          } else {
            console.log("\nACCESS DENIED");
            console.log("Principal Rejected the Request.");

            securityGate();
          }
        });
      },
    );
  });
}

console.log("==================================");
console.log("   COLLEGE SECURITY GATE SYSTEM");
console.log("==================================");

securityGate();
