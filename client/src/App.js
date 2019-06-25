import React, { Component } from 'react'

import { ApolloProvider } from 'react-apollo';

import apolloClient from './config/createApolloClient';

import { Employees } from './modules';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <Employees />
      </ApolloProvider>
    )
  }
}

export default App;
