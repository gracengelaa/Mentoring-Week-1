// TODO: Import the 'prompt-sync' module to enable user input from the console.

const prompt = require('prompt-sync')();

// TODO: Define a class named 'Book' with a constructor that initializes 'title', 'category', 'author', 'genre', and 'price'.
class Book {
   constructor(title, category, author, genre, price){
    this.title = title;
    this.category = category;
    this.author = author;
    this.genre = genre;
    this.price = price;
   }
}

// TODO: Initialize an empty array named 'books' to store book objects.

let books = [];

// TODO: Define a function 'addBook' that takes 'title', 'category', 'author', 'genre', and 'price' as parameters and adds a new book to the 'books' array.

function addBook(title, category, author, genre, price) {
function addBook(){

    title = prompt("Book's Title: ");
    category = prompt("Book's Category: ");
    author = prompt("Book's Author: ");
    genre = prompt("Book's Genre: ");
    price = parseInt(prompt("Book's Price: "));

    newbook = {title, category, author, genre, price};
    books.push(newbook);
    console.log("The book successfully added!");
}
}

// TODO: Define a function 'searchBook' that takes 'title' as a parameter and searches for a book by its title in the 'books' array.
function searchBook(title) {
    title = prompt("Input the Title: ");
    foundbook = books.find(bookItem => bookItem.title === title);

    if (foundbook){
        console.log("The book found!"); 
    }
    else{
        console.log("Can't found the book.");
    }
}

// TODO: Define a function 'deleteBook' that takes 'title' as a parameter and deletes a book by its title from the 'books' array.
function deleteBook(title) {
    const title = prompt("The title that we want to delete: ");
    const gtdbook = books.findIndex(bookItem => bookItem.title === title);

    if(gtdbook !== -1){
        books.splice(gtdbook, 1);
        console.log("The book successfully deleted.");
    }

    else{
        console.log("The book is not found.");
    }

}

// TODO: Define a function 'showBooks' that logs all books in the 'books' array to the console.
function showBooks() {
    if(books.length === 0){
        console.log("There is no book.");
    }
    else {
        console.log("Book's List:");
        for (let i = 0; i < books.length; i++){
            console.log( i, ".", books[i] );
        }
    }
}

// TODO: Define a function 'searchBookByPrice' that takes 'price' as a parameter and searches for a book by its price in the 'books' array.
function searchBookByPrice(price) {
    const booksinprice = [];
    const price = parseInt(prompt("Book's price: "));
    for (let i = 0; i < books.length; i++){
        if (books.price[i] === price){
            booksinprice.push(books[i]);
        }
        else{
            booksinprice = booksinprice;
        }
    }
    if(booksinprice.length === 0){
        console.log("There is no book in that price.");
    }
    else{
        console.log("The books in that price:")
         for (let j = 0; j < booksinprice.length; j++){
            console.log(j, ".", booksinprice[i]);
    }
}
}

// TODO: Define a function 'displayMenu' that displays a menu of options and handles user input to perform different actions.
function displayMenu(){
    while(true) {
        console.log('1. Add book');
        console.log('2. Search book');
        console.log('3. Delete book');
        console.log('4. Show all books');
        console.log('5. Search book by price');
        console.log('6. Exit');
        // TODO: Prompt the user to enter a choice and perform the corresponding action, save the input in a variable 'choice'.

        switch(choice) {
            case '1':
                // TODO: Prompt the user to enter book details and call 'addBook' with the provided details.
                console.log("Please Input the book's details below!");
                addBook();
                break;
            case '2':
                // TODO: Prompt the user to enter the title of the book to search and call 'searchBook' with the provided title.
                console.log("Please enter the book's title below!");
                searchBook();break;
            case '3':
                // TODO: Prompt the user to enter the title of the book to delete and call 'deleteBook' with the provided title.
                console.log("Please enter the book's title that we are going to delete below!");
                deleteBook();
                break;
            case '4':
                // TODO: Call 'showBooks' to display all books.
                showBooks();
                break;
            case '5':
                // TODO: Prompt the user to enter the price of the book to search and call 'searchBookByPrice' with the provided price.
                console.log("Please enter the book's price below!");
                searchBookByPrice();
                break;
            case '6':
                // TODO: Exit the menu loop.
                return;
            default:
                console.log("Input invalid. Enter the number 1 to 6!");
                // TODO: Log an error message for an invalid choice.
        }
    }
}

// TODO: Call 'displayMenu' to start the application.
displayMenu();