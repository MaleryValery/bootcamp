import authors from '../data/authors.json';

const getAllAuthors = () => authors;

const getAuthorById = (id) => {
  const authorById = booksWithAuthor.find((author) => author.id === id);
  if (!authorById.id) return null;

  return authorById;
};

export default { getAllAuthors, getAuthorById }