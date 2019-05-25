import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import { HashRouter as Router } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'

import { loader } from 'graphql.macro';
import { defaults, resolvers } from './state';
import './index.css';
import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';

const schema = loader('../schema.graphql');

const client = new ApolloClient({
  uri: 'https://api.graphql.jobs/',
  clientState: {
    defaults,
    resolvers,
    typeDefs: schema
  }
});

ReactDOM.render(
  (
    <Router>
      <ApolloProvider client={client}>
        <ApolloHooksProvider client={client}>
          <CssBaseline />
          <App />
        </ApolloHooksProvider>
      </ApolloProvider>
    </Router>
  ),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
