import express from "express";
import { ApolloServer, gql } from "apollo-server-express";

const PORT = 4000;

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello world!",
  },
};

const app = express();
const apollo = new ApolloServer({ typeDefs, resolvers });

apollo.applyMiddleware({ app });

app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${apollo.graphqlPath}`)
);
