const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const appointments = [
    { name: "Suraj Rai", time: "09:00 AM" },
    { name: "Akash Patel", time: "10:30 AM" },
    { name: "Soham Gaonkar", time: "02:00 PM" },
    { name: "Krrish Naik",    time:"09:30 AM" },
    {name:"soham naik", time:"10:45 AM"},
];


function securityGate() {

    rl.question("\nEnter Visitor Name (or 'exit'): ", function (visitorName) {

        if (visitorName.toLowerCase() === "exit") {
            console.log("\nSecurity Gate Closed.");
            rl.close();
            return;
        }

       
        let appointment = appointments.find(function (person) {
            return person.name.toLowerCase() === visitorName.toLowerCase();
        });

        if (!appointment) {
            console.log("\nNo Appointment Found.");
            console.log("ACCESS DENIED.");
            securityGate();
            return;
        }

        console.log("\nAppointment Found");
        console.log("Visitor :", appointment.name);
        console.log("Time    :", appointment.time);

        
        rl.question("\nPrincipal - Allow Entry? (Y/N): ", function (answer) {

            if (answer.toUpperCase() === "Y") {
                console.log("\nACCESS GRANTED");
                console.log("Welcome", appointment.name);
            } else {
                console.log("\nACCESS DENIED");
                console.log("Principal Rejected the Request.");
            }

            securityGate();
        });

    });

}

console.log("==================================");
console.log("   COLLEGE SECURITY GATE SYSTEM");
console.log("==================================");

securityGate();