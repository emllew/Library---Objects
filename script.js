let myLibrary = [];
let button = document.querySelector('button');
let form = document.querySelector('form');
let card = document.querySelector('.card');

//hide show the form
function refreshForm() {
  form.setAttribute('class', 'hideForm');
  form.reset();
}
button.addEventListener('click', (e) => {
  form.removeAttribute('class', 'hideForm');
});

//form submit
form.addEventListener('submit', (event) => {
  event.preventDefault();
  let title = form.elements.title.value;
  let author = form.elements.author.value;
  let read = form.elements.read.value;
  let pages = form.elements.pages.value;
  addBookToLibrary(title, author, read, pages);
  refreshForm();
});

//submit the form as an obj
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  //this shows it in the console and in the newly added one
  this.info = function () {
    return (
      capitalizeFirstLetter(title) +
      ' by ' +
      capitalizeFirstLetter(author) +
      '. ' +
      capitalizeFirstLetter(pages) +
      ' pages ' +
      capitalizeFirstLetter(read)
    );
  };
}

function addBookToLibrary(title, author, read, pages) {
  let newBook = new Book(title, author, read, pages);
  myLibrary.unshift(newBook);
  let newCard = document.createElement('p');
  card.appendChild(newCard);
  newCard.textContent = newBook.info();
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

///first page display card
const book1 = new Book('The Hobbit', 'Tolkein', '265', 'has been read');

let str1 =
  book1.title +
  ', by ' +
  book1.author +
  '. ' +
  book1.pages +
  ' pages. ' +
  book1.read;
myLibrary.unshift(book1);
card.textContent = str1;
