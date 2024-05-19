import useBookSevice from './services';

export const getAllbooks = (req, res) => {
  const books = useBookSevice.getAllbooks();
  res.status(200).json(books);
};

export const getBookById = (req, res) => {
  const book = userService.getBookById(req.params.id);
  if (!book) {
    return res.status(404).json({ error: 'book not found' }).end();
  }
  res.status(200).send(book);
};

export const addBook = (req, res) => {
  const newBook = useBookSevice.addBook(req.body);
  if (!newBook) {
    res.status(400).json({ error: 'bad request' }).end();
  }
  res.status(201).send(newBook);
};

export const updateBookById = (req, res) => {
  const updatedBook = useBookSevice.updateBookById(req.params.id, req.body);
  if (!updatedBook) {
    res.status(400).json({ error: 'bad request' }).end();
  }
  res.status(204).end();
};

export const deleteBook = (req, res) => {
  const bookToDelete = useBookSevice(req.params.id);
  if (!bookToDelete) {
    return res.status(404).json({ error: 'book not found' }).end();
  }
  res.status(204).end();
};
