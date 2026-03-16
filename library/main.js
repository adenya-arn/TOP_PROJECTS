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
// console.log(myLibrary);

//DOM manipulation
const container = document.querySelector(".container");
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

const newBook = document.querySelector("#newBook");
const form = document.createElement("form");

const addBookForm = () => {
  // container.appendChild(form);

  const titleLabel = document.createElement("label");
  titleLabel.textContent = "Title";
  titleLabel.for = "title";
  const titleInput = document.createElement("input");
  titleInput.id = "title";
  titleInput.type = "text";
  titleInput.placeholder = "Book Title";

  const authorLabel = document.createElement("label");
  authorLabel.textContent = "Author";
  authorLabel.for = "author";
  const authorInput = document.createElement("input");
  authorInput.id = "author";
  authorInput.type = "text";
  authorInput.placeholder = "Author";

  const pagesLabel = document.createElement("label");
  pagesLabel.textContent = "Number of Pages";
  pagesLabel.for = "pages";
  const pagesInput = document.createElement("input");
  pagesInput.id = "pages";
  pagesInput.type = "numbers";
  pagesInput.placeholder = "Pages";

  const readLabel = document.createElement("label");
  readLabel.textContent = "Read";
  readLabel.for = "read";
  const readRadio = document.createElement("input");
  readRadio.id = "read";
  readRadio.value = "true";
  readRadio.type = "radio";
  readRadio.name = "readStatus";

  const notReadLabel = document.createElement("label");
  notReadLabel.textContent = "Not Read";
  notReadLabel.for = "notRead";
  const notReadRadio = document.createElement("input");
  notReadRadio.id = "notRead";
  notReadRadio.value = "false";
  notReadRadio.type = "radio";
  notReadRadio.name = "readStatus";

  const submitBtn = document.createElement("button");
  submitBtn.textContent = "Add Book";

  form.append(
    titleLabel,
    titleInput,
    authorLabel,
    authorInput,
    pagesLabel,
    pagesInput,
    readLabel,
    readRadio,
    notReadLabel,
    notReadRadio,
    deleteBtn,
  );

  container.append(form);

  submitBtn.addEventListener("click", (evnt) => {
    evnt.preventDefault();

    const title = titleInput.value;
    const author = authorInput.value;
    const pages = pagesInput.value;
    const selected = document.querySelector("input[name='readStatus']:checked");
    const readValue = selected ? selected.value === "true" : false;
    addBookToLibrary(title, author, pages, readValue);
  });
};

// form.addEventListener("submit", (evnt) => {
//   evnt.preventDefault();
//   const title = titleI
// })
newBook.addEventListener("click", addBookForm);

console.log(myLibrary);

// functions to display book, delete book

BookObjectCreator.prototype.deleteBook = function () {
  const deleteBook = document.createElement("button");
  deleteBook.classList.add("deleteBook");
  deleteBook.textContent = "Delete";
};
