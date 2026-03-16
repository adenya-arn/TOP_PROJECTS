//Library array
const myLibrary = [{ title: "Arnold", author: "adenya" }];

//Constructor function for a book
function BookObjectCreator(title, author, pages, read = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.id = crypto.randomUUID();
  this.read = read;
  this.info = function () {
    console.log(
      `The ${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "read" : "not read yet"}`,
    );
  };
}
// //prototype function that everybook should have
// BookObjectCreator.prototype.info = function () {
//   const bookInfo = [this.title, this.author, this.pages, this.read];
//   return bookInfo;
// };

//function to add book to library and first chyecks if it exists
function addBookToLibrary(title, author, pages, read) {
  if (
    myLibrary.find((item) => item.title.toLowerCase() === title.toLowerCase())
  ) {
    alert("Book already exists!!");
    return;
  }
  const book = new BookObjectCreator(title, author, pages, read);
  myLibrary.push(book);
}

//tried creatin a book
// addBookToLibrary("aaaaa", "annette", 20, true);
console.log(myLibrary);

//DOM manipulation
const container = document.querySelector(".container");

const addBookBtn = document.createElement("button");
addBookBtn.classList.add("addBookBtn");
addBookBtn.textContent = "New Book";
container.append(addBookBtn);

const bookCard = document.querySelector(".bookCard");
const ul = document.createElement("ul");
bookCard.appendChild(ul);

myLibrary.forEach((element) => {
  const li = document.createElement("li");
  console.log(element);
  li.textContent = element.bookInfo;
  ul.appendChild(li);
  console.log(li);
});

//form to add a new book

// const addBook = document.querySelector("#addBook");
const form = document.createElement("form");

const addBookForm = () => {
  container.appendChild(form);
  input.classList.add("Author");
};
addBookBtn.addEventListener("click", addBookForm);
