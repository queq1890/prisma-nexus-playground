import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import { createContext } from "./context";
import schema from "./schema";

const PORT = 4000;

const app = express();
const apollo = new ApolloServer({ schema, context: createContext });

apollo.applyMiddleware({ app });

app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${apollo.graphqlPath}`)
);
