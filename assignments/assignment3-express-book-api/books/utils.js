function validateBook(template, bookInput) {
  // check if unrelated keys {foo,bar}
  const hasUnrelatedKeys = Object.keys(bookInput).some((key) => !blankBook.hasOwnProperty(key));
  if (hasUnrelatedKeys) {
    return false;
  }
  for (const key in template) {
    if (!bookInput[key]) {
      return false;
    }
  }
  return true;
}
export function bookFactory(bookInput) {
  const template = {
    name: 'Untitled',
    title: 'Untitled',
    authorId: null,
    price: 0,
  };
  // {name,title,authorId,price,foo,bar}
  if (validateBook(template, bookInput)) {
    return bookInput;
  }
  return null;
} //{name,title}
