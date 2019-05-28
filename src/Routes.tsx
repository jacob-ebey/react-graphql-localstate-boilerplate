import * as React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './routes/HomePage';
import PokemonSearchPage from './containers/PokemonSearchPage';

const Routes: React.FC = () => (
  <React.Fragment>
    <Route exact path="/" component={HomePage} />
    <Route path="/pokemon" component={PokemonSearchPage} />
  </React.Fragment>
);

export default Routes;
