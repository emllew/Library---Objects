let myLibrary = [];
let button = document.querySelector('button');
let form = document.querySelector('form');
let card = document.querySelector('.card');
card.setAttribute('class', 'added');
let removeButton = document.createElement('button');

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
  let pages = form.elements.pages.value;
  let read = form.elements.read.value;
  addBookToLibrary(title, author, pages, read);
  refreshForm();
});

//submit the form as an obj
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function () {
    return `${capitalizeFirstLetter(title)} by ${capitalizeFirstLetter(
      author
    )}. ${capitalizeFirstLetter(pages)} pages. ${capitalizeFirstLetter(read)}`;
  };
}

function addBookToLibrary(title, author, pages, read) {
  let newBook = new Book(title, author, pages, read);
  myLibrary.unshift(newBook);
  let newCard = document.createElement('div');
  newCard.setAttribute('class', 'bookCard');
  card.appendChild(newCard);
  newCard.textContent = newBook.info();
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

///first page display card
addBookToLibrary('The Hobbit', 'Tolkein', '265', 'has been read.');
