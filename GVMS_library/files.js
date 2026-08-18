const fs = require("fs");

function saveBook(book) {
    fs.appendFileSync("BooksData.txt", book + "\n");
}

function readBook() {
    return fs.readFileSync("BooksData.txt", "utf-8");
}

module.exports = {
    saveBook,
    readBook
};