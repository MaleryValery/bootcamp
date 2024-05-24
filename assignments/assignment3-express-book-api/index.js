import express from 'express';
import booksRouter from './books/routes';

const app = express();
const port = 3000;

app.use('/users', booksRouter);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
