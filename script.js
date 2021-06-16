let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return title + ' by ' + author + ', ' + pages + ' pages, ' + read;
  };
}

function addBookToLibrary() {
  // do stuff here
}

function Books

const book1 = new Books('The Hobbit', 'Tolkein', '265', 'has been read');
console.log(book1.info());
console.log(book1);


