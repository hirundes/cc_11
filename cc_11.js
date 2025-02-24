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
        this.copies += quantity;
};
};

console.log("--Task 1--") //Logged Task 1
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 5"
book1.updateCopies(-1);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"


//Task 2 - Created Borrower Class
class Borrower {    //Create class Borrower with properties name, borrowerId, and borrowedBooks.
    constructor(name, borrowerId) {
        this.name = name;
        this.borrowerId = borrowerId;
        this.borrowedBooks = [];
    }
    
    borrowBook(book) {  //Add method borrowBook(book) which adds book title to borrowedBooks.
        return this.borrowedBooks.push(book);
}
    returnBook(book) {  //Add method returnBook(book) which removes book from borrowedBooks
        let index = this.borrowedBooks.indexOf(book);
        if (index !==-1) {
            this.borrowedBooks.splice(index, 1);
        }
    }
}

console.log("--Task 2--")  //Logged Task 2
const borrower1 = new Borrower("Alice Johnson", 201);
borrower1.borrowBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);
// Expected output: ["The Great Gatsby"]

borrower1.returnBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);
// Expected output: []


//Task 3 - Created Library Class
class Library {     
    constructor() {
        this.books = [];
        this.borrowers = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    listBooks() {
            this.books.forEach(book => console.log(book.getDetails()));
    }
        
}

console.log("--Task 3--")  //Logged Task 3
const library = new Library();
library.addBook(book1);
library.listBooks();
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"

