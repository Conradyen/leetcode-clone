import "reflect-metadata";
import { createConnection } from "typeorm";
import express = require("express");
import cookieParser = require("cookie-parser");
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";
import { authMiddleWare } from "./auth/authMiddleWare";
import { execute, subscribe } from "graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { createServer } from "http";
import { SubscriptionServer } from "subscriptions-transport-ws";
import { PubSub } from "graphql-subscriptions";
import cors = require("cors");

const startServer = async () => {
  const graphqlSchema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });
  const pubsub = new PubSub();
  const server = new ApolloServer({
    schema: graphqlSchema,
    context: ({ req, res }: any) => ({ req, res, pubsub }),
  });

  await createConnection();
  const app = express();
  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );

  app.use(cookieParser());
  app.use(authMiddleWare);

  server.applyMiddleware({ app, cors: false });
  const _app = createServer(app);
  _app.listen({ port: 4000 }, () => {
    console.log(
      `🚀 Server ready at http://localhost:4000${server.graphqlPath}`
    );
    new SubscriptionServer(
      {
        execute,
        subscribe,
        schema: graphqlSchema,
      },
      {
        server: _app,
        path: "/subscriptions",
      }
    );
  });
};
startServer();
