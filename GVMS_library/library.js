const library = require("./files");
const EventEmitter = require("events");
const readline = require("readline");


const event = new EventEmitter();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

event.on("save", () => {
    console.log("Book Saved Successfully.");
});

event.on("display", () => {
    console.log("Displaying Books...");
});

try {

    rl.question("Enter Book Name: ", function(book) {

        library.saveBook(book);

        event.emit("save");

        setTimeout(function() {

            let data = library.readBook();

            event.emit("display");

            console.log(data);

            rl.close();

        },1000);

    });

}
catch(error){
    console.log(error.message);
} 