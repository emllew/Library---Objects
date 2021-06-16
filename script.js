let myLibrary = [];
let button = document.querySelector('button');
let form = document.querySelector('form');

button.addEventListener('click', () => {
  form.setAttribute('class', 'showForm');
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let title = form.elements.title.value;
  let author = form.elements.author.value;
  let read = form.elements.read.value;
  let pages = form.elements.pages.value;
  console.log(title + author + read + pages);
  addBookToLibrary(title, author, read, pages);
});

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return title + ' by ' + author + ', ' + pages + ' pages, ' + read;
  };
}
function addBookToLibrary(title, author, read, pages) {
  let newBook = new Book(title, author, read, pages);
  console.log(newBook);
}

const book1 = new Book('The Hobbit', 'Tolkein', '265', 'has been read');
console.log(book1.info());
console.log(book1);
