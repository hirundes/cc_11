//Task 1 - Created Book Class
class Book {    //Create Book calss to represent books in the library with the properties title, author, isbn, and copies.
    constructor(title, author, isbn, copies) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.copies = copies;
    }
    
    getDetails() {  //Add method getDetails() returning formatted string of book details.
        return `Title: ${this.title} Author: ${this.author} ISBN: $${this.isbn}, Copies: ${this.copies}`;
    }
    updateCopies(quantity) {    //Add method updateCopies(quantity) that modifies available copies.
        if (this.stock >= quantity) {
            this.stock -= quantity;
            return true;
        }
        return false;
};
};

console.log("--Task 1--")
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 5"
book1.updateCopies(1);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"



