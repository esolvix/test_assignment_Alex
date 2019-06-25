import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://backend:3001/graphql',
  fetchOptions: {
    mode: 'no-cors',
  },
});

export default client;
