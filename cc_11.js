//Task 1 - Created Book Class
class Book {    //Create Book calss to represent books in the library with the properties title, author, isbn, and copies.
    constructor(title, author, isbn, copies) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.copies = copies;
    }
    
    getDetails() {  //Add method getDetails() returning formatted string of book details.
        return `Title: ${this.title} Author: ${this.author} ISBN: ${this.isbn}, Copies: ${this.copies}`;
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
    };
    
    borrowBook(book) {  //Add method borrowBook(book) which adds book title to borrowedBooks.
        return this.borrowedBooks.push(book);
};
    returnBook(book) {  //Add method returnBook(book) which removes book from borrowedBooks
        let index = this.borrowedBooks.indexOf(book);
        if (index !==-1) {
            this.borrowedBooks.splice(index, 1);
        };
    };
};

console.log("--Task 2--")  //Logged Task 2
const borrower1 = new Borrower("Alice Johnson", 201);
borrower1.borrowBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);
// Expected output: ["The Great Gatsby"]

borrower1.returnBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);
// Expected output: []


//Task 3 - Created Library Class
class Library {     //Create class Library with books and borrowers.
    constructor() {
        this.books = [];
        this.borrowers = [];
    };
    addBorrower(borrower) {     this.borrowers.push(borrower); };
    addBook(book) {     //Add method addBook(book) that adds a new book to the library.
        this.books.push(book);
    };
    listBooks() {       //Add method listBooks() which lots all books' details.
            this.books.forEach(book => console.log(book.getDetails()));
    };
    lendBook(borrowerId, isbn) {    //Task 4: Add method lendBook(borrowerId, isbn) which checks if book exists, reduces books by 1. and updates list.
        let book = this.books.find(book => book.isbn === isbn);
        if (book && book.copies > 0) {
            let borrower = this.borrowers.find(b => b.borrowerId === borrowerId);

            if (borrower) {
                borrower.borrowedBooks.push(book.title);
                book.updateCopies(-1);
            };
        };
    };
    returnBook(borrowerId, isbn) {  //Task 5: Add method returnBook(borrowerId, isbn) which increases the book's available copies and removes the book from borrower's borrowed list.
        let book = this.books.find(book => book.isbn === isbn);
        if (book) {
            let borrower = this.borrowers.find(b => b.borrowerId === borrowerId);

            if (borrower && borrower.borrowedBooks.includes(book.title)) { 
                borrower.borrowedBooks = borrower.borrowedBooks.filter(title => title !== book.title); //Note: checking if the borrower and if it includes the book title.
                book.updateCopies(1); //Note: similar to lendBook but we are increase book copies
                        };
                    };
    };
};

console.log("--Task 3--")  //Logged Task 3
const library = new Library();
library.addBook(book1);
library.listBooks();
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"


//Task 4 - Implemented Book Borrowing
console.log("--Task 4--")  //Logged Task 4
library.addBorrower(borrower1);
library.lendBook(201, 123456);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 3"
console.log(borrower1.borrowedBooks);
// Expected output: ["The Great Gatsby"]


//Task 5 - Implemented Book Returns
console.log("--Task 5--")  //Logged Task 5
library.returnBook(201, 123456);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"
console.log(borrower1.borrowedBooks);
// Expected output: []