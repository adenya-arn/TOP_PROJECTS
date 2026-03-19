//Library array
// let myLibrary = [new Book("Arnold", "adenya", 100, false)];

//Constructor function for a book
class Book {
  constructor(title, author, pages = "", read = false) {
    if (title === "") return alert("Book must have title");

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.id = crypto.randomUUID();
    this.read = read;
  }

  set read(value) {
    if (typeof value !== "boolean") {
      console.log("Read must be true or false");
      return;
    }
    this._read = value;
  }

  get read() {
    return this._read;
  }

  set pages(value) {
    if (value < 0) {
      console.log("Pages can't be negative");
      return;
    }
    this._pages = value;
  }

  get pages() {
    return this._pages;
  }

  get info() {
    return `The ${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "read" : "not read yet"}`;
  }

  toggleRead() {
    this.read = !this.read;
  }
}

let myLibrary = [new Book("Arnold", "adenya", 100, false)];
//function to add book to library and first chyecks if it exists
function addBookToLibrary(title, author, pages, read) {
  if (
    myLibrary.find((item) => item.title.toLowerCase() === title.toLowerCase())
  ) {
    alert("Book already exists!!");
    return;
  }
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

//DOM manipulation
const container = document.querySelector(".container");

const addBookBtn = document.createElement("button");
addBookBtn.classList.add("addBookBtn");
addBookBtn.textContent = "New Book";
container.appendChild(addBookBtn);

//displaying books
const bookList = document.querySelector(".bookList");

function displayBooks() {
  bookList.innerHTML = "";

  myLibrary.forEach((book) => {
    const bookCard = createBookCard(book);
    bookList.append(bookCard);
  });
}

function createBookCard(book) {
  const infoDiv = document.createElement("div");
  infoDiv.classList.add("infoDiv");

  const actionsDiv = document.createElement("div");
  actionsDiv.classList.add("actionsDiv");

  const bookCard = document.createElement("div");
  bookCard.classList.add("bookCard");
  bookCard.dataset.id = book.id;

  const bookTitle = document.createElement("p");
  bookTitle.textContent = `Title: ${book.title}`;

  const bookAuthor = document.createElement("p");
  bookAuthor.textContent = `Author: ${book.author}`;

  const bookPages = document.createElement("p");
  bookPages.textContent = `Pages: ${book.pages || "N/A"}`;

  const read = document.createElement("p");
  read.textContent = book.read ? "Read" : "Not Read";

  bookCard.dataset.id = book.id;

  infoDiv.append(bookTitle, bookAuthor, bookPages, read);

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.dataset.id = book.id;
  removeBtn.dataset.action = "remove";

  const toggleBtn = document.createElement("button");
  toggleBtn.textContent = book.read ? "Mark as unread" : "Mark as read";
  toggleBtn.dataset.action = "toggle";
  toggleBtn.dataset.id = book.id;

  actionsDiv.append(removeBtn, toggleBtn);
  bookCard.append(infoDiv, actionsDiv);

  return bookCard;
}

//form to add a new book

const newBook = document.querySelector("#newBook");

const addBookForm = () => {
  const form = document.createElement("form");
  // document.querySelector(".addBookBtn").remove();
  addBookBtn.style.display = "none";

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
  pagesInput.type = "number";
  pagesInput.placeholder = "Pages";

  const fieldSet = document.createElement("fieldset");
  const legend = document.createElement("legend");
  legend.textContent = "Read or Not Read the book";

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

  fieldSet.append(legend, readLabel, readRadio, notReadLabel, notReadRadio);

  const submitBtn = document.createElement("button");
  submitBtn.textContent = "Add Book";

  form.append(
    titleLabel,
    titleInput,
    authorLabel,
    authorInput,
    pagesLabel,
    pagesInput,
    fieldSet,
    submitBtn,
  );

  container.append(form);

  submitBtn.addEventListener("click", (evnt) => {
    evnt.preventDefault();

    container.append(addBookBtn);

    const title = titleInput.value;
    const author = authorInput.value;
    const pages = Number(pagesInput.value);
    const selected = document.querySelector("input[name='readStatus']:checked");
    const readValue = selected ? selected.value === "true" : false;
    addBookToLibrary(title, author, pages, readValue);
    displayBooks();
    form.remove();
    addBookBtn.style.display = "block";
  });
};

addBookBtn.addEventListener("click", addBookForm);

//Event delegation
bookList.addEventListener("click", (evnt) => {
  const action = evnt.target.dataset.action;
  const id = evnt.target.dataset.id;

  if (!action || !id) return;

  if (action === "toggle") {
    const book = myLibrary.find((book) => book.id === id);
    if (!book) return;

    book.toggleRead();
  }
  if (action === "remove") {
    myLibrary = myLibrary.filter((book) => book.id !== id);
  }
  displayBooks();
});
// console.log(myLibrary);
displayBooks();
