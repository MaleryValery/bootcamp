import books from '../data/books.json' assert { type: 'json' };
import authors from '../data/authors.json' assert { type: 'json' };
import { v4 as uuidv4 } from 'uuid';

const booksWithAuthor = books.map((book) => {
  const authorObj = { author: authors.find((author) => author.id === book.authorId) };
  return Object.assign(book, authorObj);
});

console.log(booksWithAuthor);

const getAllbooks = () => booksWithAuthor;
const getBookById = (id) => {
  const bookById = booksWithAuthor.find((book) => book.id === id);
  if (!bookById) return null;

  return bookById;
};

const addBook = (book) => {
  if (!Object.keys(book).length) {
    return null;
  }
  books.push(Object.assign(book, { id: uuidv4() }));
};

const updateBookById = (id, newBook) => {
  const bookToUpdate = booksWithAuthor.find((book) => book.id === id);

  if (!Object.keys(bookToUpdate).length) {
    return null;
  }
  Object.keys(bookToUpdate).forEach((key) => {
    bookToUpdate[key] = newBook[key] ? newBook[key] : bookToUpdate[key];
  });
  return bookToUpdate;
};

const deleteBook = (id) => {
  const bookIndex = booksWithAuthor.findIndex((book) => book.id === id);
  if (bookIndex) {
    console.log('book not found');
    return;
  }

  return booksWithAuthor.splice(bookIndex, 1)[0];
};

export default { getAllbooks, getBookById, addBook, updateBookById, updatePartBookById, deleteBook };
