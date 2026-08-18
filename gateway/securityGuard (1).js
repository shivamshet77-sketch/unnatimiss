const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Simulated appointments database
const appointments = [
  { name: 'Alice Johnson', time: '09:00 AM', visitorId: 'V001' },
  { name: 'Bob Smith', time: '10:30 AM', visitorId: 'V002' },
  { name: 'Carol Davis', time: '02:00 PM', visitorId: 'V003' }
];

// Simulated principal's decision (in real scenario, this would be checked via a system or person)
// For simulation, we'll ask the principal (user playing the role) via console
function askPrincipal(visitorName, appointmentTime) {
  return new Promise((resolve) => {
    rl.question(`Principal, visitor ${visitorName} has an appointment at ${appointmentTime}. Allow access? (yes/no): `, (answer) => {
      resolve(answer.toLowerCase().trim() === 'yes' || answer.toLowerCase().trim() === 'y');
    });
  });
}

function checkAppointment(visitorName) {
  return appointments.find(appt =>
    appt.name.toLowerCase() === visitorName.toLowerCase()
  );
}

async function processVisitor() {
  rl.question('Enter visitor name (or "exit" to quit): ', async (visitorName) => {
    if (visitorName.toLowerCase() === 'exit') {
      console.log('Security gate shutting down.');
      rl.close();
      return;
    }

    const appointment = checkAppointment(visitorName);

    if (!appointment) {
      console.log(`ACCESS DENIED: No appointment found for ${visitorName}.`);
      console.log('----------------------------------------');
      processVisitor(); // Ask for next visitor
      return;
    }

    console.log(`APPOINTMENT FOUND: ${visitorName} at ${appointment.time} (ID: ${appointment.visitorId})`);

    const permissionGranted = await askPrincipal(visitorName, appointment.time);

    if (permissionGranted) {
      console.log(`ACCESS GRANTED: Welcome ${visitorName}!`);
      console.log('----------------------------------------');
    } else {
      console.log(`ACCESS DENIED: Principal refused entry for ${visitorName}.`);
      console.log('----------------------------------------');
    }

    processVisitor(); // Ask for next visitor
  });
}

console.log('=== SECURITY GATE SYSTEM ===');
console.log('Checking appointments and requesting principal permission...\n');
processVisitor();