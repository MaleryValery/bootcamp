import { v4 as uuidv4 } from 'uuid';
import { bookFactory } from './utils.js';
import authors from '../data/authors.json' assert { type: 'json' };
import books from '../data/books.json' assert { type: 'json' };

const getbooksWithAuthor = (booksArr, authorsArr) => {
  const authorMap = new Map(authorsArr.map((autor) => [autor.id, autor]));

  return booksArr.map((book) => {
    if (!authorMap.has(book.authorId)) return book;
    return Object.assign(book, { author: authorMap.get(book.authorId) });
  });
};

const getAllbooks = () => getbooksWithAuthor(books, authors);

const getBookById = (id) => {
  const booksWithAuthor = getbooksWithAuthor(books, authors);

  const bookById = booksWithAuthor.find((book) => book.id === id);
  if (!bookById.id) return null;

  return bookById;
};

const addBook = (book) => {
  const newBook = bookFactory(book);
  if (!authors.some((author) => author.id === book.id)) {
    console.log('author not found');
    return null;
  }

  if (!newBook) {
    console.log('book should have title and price');
    return null;
  }

  books.push(Object.assign(newBook, { id: uuidv4() }));
};

const updateBookById = (id, newBook) => {
  const bookToUpdate = books.find((book) => book.id === id);

  if (!Object.keys(bookToUpdate).length) {
    return null;
  }
  Object.keys(bookToUpdate).forEach((key) => {
    bookToUpdate[key] = newBook[key] ? newBook[key] : bookToUpdate[key];
  });
  return bookToUpdate;
};

const deleteBook = (id) => {
  const bookIndex = books.findIndex((book) => book.id === id);
  if (bookIndex === -1) {
    console.log('book not found');
    return;
  }

  return booksWithAuthor.splice(bookIndex, 1)[0];
};

export default { getAllbooks, getBookById, addBook, updateBookById, deleteBook };
