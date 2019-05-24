import * as React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './routes/HomePage';

const Routes: React.FC = () => (
  <React.Fragment>
    <Route exact path="/" component={HomePage} />
  </React.Fragment>
);

export default Routes;
