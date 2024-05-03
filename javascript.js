
const myLibrary = [];

function Book(id, title, author, pages, read) {
    this.id = id,
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}
let bookIdCounter = 4;
let book1 = new Book(1, "Harry Potter", "J.K.Rolling", 887, false);
let book2 = new Book(2, "Lord of the Rings", "J.R.R. Tolkien", 1178, false);
let book3 = new Book(3, "To Kill a Mockingbird", "Harper Lee", 281, false);
myLibrary.push(book1, book2, book3);

const clickAddBook = document.getElementById("addBook");
const clickCancel = document.getElementById("cancelAddBook");
const title = document.getElementById("inputTitle");
const author = document.getElementById("inputAuthor");
const pages = document.getElementById("inputPages");
clickAddBook.addEventListener("click", () => {addBookToLibrary(title.value, author.value, pages.value)});

function addBookToLibrary(title, author, pages) {
    myLibrary.push(new Book(bookIdCounter++, title, author, pages, false));
    displayLibrary();
}
function saveToggleState(bookID, state) {
    localStorage.setItem(`toggleStatus-${bookID}`, state)
}

function getSavedToggleState(bookID) {
    const savedStatus = localStorage.getItem(`toggleStatus-${bookID}`);
    return savedStatus === "true"; // Convert to boolean
}

console.log(myLibrary);
function displayLibrary() {
    const libraryContainer = document.getElementById("libraryContainer")
    libraryContainer.innerHTML = "";
    myLibrary.forEach((book, index) => {
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

        const readStatus = document.createElement("p");
        readStatus.textContent = "Read status!";

        const toggle = document.createElement("input");
        toggle.setAttribute("type", "checkbox");
        toggle.checked = getSavedToggleState(book.id);
        toggle.addEventListener("change", () => {
            saveToggleState(book.id, toggle.checked)
            // toggle.checked = getSavedToggleState(); // Set the initial state from localStorage

        })

        bookDiv.appendChild(titleP);
        bookDiv.appendChild(authorP);
        bookDiv.appendChild(pagesP);
        bookDiv.appendChild(deleteBook);
        bookDiv.appendChild(toggle);
        bookDiv.appendChild(readStatus);



        libraryContainer.appendChild(bookDiv);
        deleteBook.addEventListener("click", () => {
            // Remove the book from the array
            myLibrary.splice(index, 1);  // remove the book
            // Re-display the library after removing the book
            displayLibrary();  //re-render
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