let myLibrary = [];

/* An object constructor for every new book added to the library */

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggle = function () {
  this.read = !this.read;
};

function toggle(index) {
  myLibrary[index].toggle();
  showBook();
}

/* A function that displays the books on the screen, also used in other functions to rerender the page */

function showBook() {
  let singleBook = document.getElementById("library");
  singleBook.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let nBook = myLibrary[i];
    let bookElement = document.createElement("div");
    bookElement.innerHTML = `<div class = "card-title" > 
      <p class="nTitle">${nBook.title} </p> 
      <p class ="nAuthor">${nBook.author} </p>
      <p>${nBook.pages} pages </p>
      <p class="status">${nBook.read ? "Read" : "Not Read"}</p>
      <button class="remove-button" onclick="removeBook(${i})"> Remove </button>
      <button class="toggle-button" onclick="toggle(${i})">Toggle</button>
      </div>`;
    singleBook.appendChild(bookElement);
  }
}

// Removes the book from the library, the showBook function renders anew

function removeBook(index) {
  myLibrary.splice(index, 1);
  showBook();
}

/* Takes all the user input, creates the book and adds it to the library */

function addBook() {
  let title = document.getElementById("booktitle").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").checked;
  let newestBook = new Book(title, author, pages, read);
  myLibrary.push(newestBook);
  showBook();
}

let newBookForm = document.getElementById("form");

let newBookButton = document.getElementById("btn");
newBookButton.addEventListener("click", function () {
  newBookForm.style.display = "flex";
});

let addBookButton = document.getElementById("submit");
addBookButton.addEventListener("click", function (event) {
  event.preventDefault();
  addBook();
  newBookForm.style.display = "none";
});
