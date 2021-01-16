const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    Posts: [Post],
  }
  type Mutation {
    addPost(title: String!, content: String!): [Post]
  }
  
  type Post {
    title: String
    content: String
  }
`;

const resolvers = {
    Query: {
      Posts: () => posts,
    },
    Mutation: {
      addPost: (obj, args) => {
          posts.push({title: args.title, content: args.content});
          return posts;
      }
    }
  };
  let posts = [
    {   title: 'Harry Potter',  content: 'J.K. Rowling',},
    {   title: 'Jurassic Park', content: 'Michael Crichton',},
];
const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  
  server.listen().then(({ url }) => {
      console.log(`🚀 Server ready at ${url}`)
  });