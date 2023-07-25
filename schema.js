const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    title: String
    author: Author
  }

  type Author {
    name: String
    books: [Book]
  }

  type Query {
    books: [Book]
    authors: [Author]
  }

  type Mutation {
    addBook(title: String, author: String): Book
    addAuthor(name: String): Author
  }
`;

module.exports = typeDefs;
