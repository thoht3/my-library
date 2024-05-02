
const myLibrary = [];

function Book(title, author, pages) {
    this.title = title,
    this.author = author,
    this.pages = pages
}

let book1 = new Book("Harry Potter", "J.K.Rolling", 887);
let book2 = new Book("Lord of the Rings", "J.R.R. Tolkien", 1178);
let book3 = new Book("To Kill a Mockingbird", "Harper Lee", 281);
myLibrary.push(book1, book2, book3);

const clickAddBook = document.getElementById("addBook");
const clickCancel = document.getElementById("cancelAddBook");
const title = document.getElementById("inputTitle");
const author = document.getElementById("inputAuthor");
const pages = document.getElementById("inputPages");
clickAddBook.addEventListener("click", () => {addBookToLibrary(title.value, author.value, pages.value)});
clickCancel.addEventListener("click", () => {});

function addBookToLibrary(title, author, pages) {
    myLibrary.push(new Book(title, author, pages));
    displayLibrary();
}
console.log(myLibrary);
function displayLibrary() {
    const libraryContainer = document.getElementById("libraryContainer")
    libraryContainer.innerHTML = "";
    myLibrary.map(book => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");

        const titleP = document.createElement("p");
        titleP.textContent = "Title: " + book.title + "; ";

        const authorP = document.createElement("p");
        authorP.textContent = " Author: " + book.author + "; ";

        const pagesP = document.createElement("p");
        pagesP.textContent = " Pages: " + book.pages + "; ";

        const deleteBook = document.createElement("button");
        deleteBook.textContent = "Delete";

        deleteBook.addEventListener("click", () => {
            libraryContainer.removeChild(bookDiv);
        })

        bookDiv.appendChild(titleP);
        bookDiv.appendChild(authorP);
        bookDiv.appendChild(pagesP);
        bookDiv.appendChild(deleteBook);

        libraryContainer.appendChild(bookDiv);
        deleteButton.addEventListener("click", () => {
            // Remove the book from the array
            myLibrary.splice(index, 1);
            // Re-display the library after removing the book
            displayLibrary();
        });

    })
}

displayLibrary();



const dialog = document.getElementById("dialogBook");
const showButton = document.getElementById("showButton");
const cancelDialog = document.getElementById("cancelAddBook");

showButton.addEventListener("click", () => {
    // event.preventDefault();
    dialog.showModal();
})

cancelDialog.addEventListener("click", () => {
    dialog.close();
})