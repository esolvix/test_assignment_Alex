const express = require('express');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('./config/database');
const typeDefs = require('./modules/employee/graphqlSchema');
const resolvers = require('./modules/employee/resolvers');

// Create Apollo server
const server = new ApolloServer({ typeDefs, resolvers });

// Create Express app
const app = express();
app.use(cors());
app.options('*', cors());

// Use Express app as middleware in Apollo Server instance
server.applyMiddleware({ app });

const Port = 3001;
// Listen server
app.listen({ port: Port }, () => console.log(`🚀Server ready at http://localhost:${Port}${server.graphqlPath}`));
