import express from 'express';
import { getAllbooks, getBookById, addBook, updateBookById, deleteBook } from './controller.js';
const booksRouter = express.Router();

booksRouter
  .get('/', getAllbooks)
  .get('/:id', getBookById)
  .post('/:id', addBook)
  .put('/:id', updateBookById)
  .delete('/:id', deleteBook);

export default booksRouter;
