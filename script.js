let myLibrary = [];
let button = document.querySelector('button');
let form = document.querySelector('form');
let card = document.querySelector('.card');
let clicks = 0;

//hide show the form
function refreshForm() {
  form.removeAttribute('class', 'hideForm');
}
button.addEventListener('click', (e) => {
  form.removeAttribute('class', 'hideForm');
});

//form submit
form.addEventListener('submit', (event) => {
  clicks++;
  event.preventDefault();
  let title = form.elements.title.value;
  let author = form.elements.author.value;
  let read = form.elements.read.value;
  let pages = form.elements.pages.value;
  console.log(title + author + read + pages);
  addBookToLibrary(title, author, read, pages);
  refreshForm();
});

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    localStorage.setItem('title', title);
    localStorage.setItem('author', author);
    localStorage.setItem('pages', pages);
    localStorage.setItem('read', read);
    return title + ' by ' + author + ', ' + pages + ' pages, ' + read;
  };
}

function addBookToLibrary(title, author, read, pages) {
  let newBook = new Book(title, author, read, pages);
  console.log(newBook);
  let str =
    capitalizeFirstLetter(newBook.title) +
    ', by ' +
    capitalizeFirstLetter(newBook.author) +
    '. ' +
    newBook.pages +
    ' Pages: ' +
    newBook.read +
    '.';
  card.innerHTML = newBook.info();
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const book1 = new Book('The Hobbit', 'Tolkein', '265', 'has been read');
console.log(book1.info());
let str =
  book1.title +
  ', by ' +
  book1.author +
  '. ' +
  book1.pages +
  ' pages, ' +
  book1.read;
card.innerHTML = str;
