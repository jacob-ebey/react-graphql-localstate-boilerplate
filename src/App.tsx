import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import { HashRouter as Router } from 'react-router-dom'
import ApolloClient from 'apollo-boost';
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import Drawer from './containers/Drawer';
import Toolbar from './containers/Toolbar';
import Routes from './Routes';
import { defaults, resolvers } from './state';

const client = new ApolloClient({
  uri: 'https://api.graphql.jobs/',
  clientState: {
    defaults,
    resolvers
  }
})

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <Router>
      <ApolloProvider client={client}>
        <ApolloHooksProvider client={client}>
          <CssBaseline />
          <Toolbar />
          <Drawer />
          <div className={classes.content}>
            <Routes />
          </div>
        </ApolloHooksProvider>
      </ApolloProvider>
    </Router>
  );
}

const useStyles = makeStyles({
  content: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column'
  },
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.4em',
      height: '0.2em'
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
      outline: '1px solid slategrey'
    }
  }
});

export default App;
