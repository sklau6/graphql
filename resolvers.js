let authors = [];
let books = [];

const resolvers = {
  Query: {
    books: () => books,
    authors: () => authors,
  },

  Mutation: {
    addBook: (parent, args) => {
      const newBook = { title: args.title, author: { name: args.author } };
      books.push(newBook);
      return newBook;
    },

    addAuthor: (parent, args) => {
      const newAuthor = { name: args.name, books: books.filter(book => book.author.name === args.name) };
      authors.push(newAuthor);
      return newAuthor;
    },
  },

  Book: {
    author: (book) => authors.find(author => author.name === book.author.name),
  },

  Author: {
    books: (author) => books.filter(book => book.author.name === author.name),
  },
};

module.exports = resolvers;
