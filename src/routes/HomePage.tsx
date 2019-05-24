import * as React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const HomePage: React.FC = () => (
  <div>
    <Container fixed>
      <Typography variant="h4">Welcome to a simple react graphql application.</Typography>
    </Container>
  </div>
);

export default HomePage;
