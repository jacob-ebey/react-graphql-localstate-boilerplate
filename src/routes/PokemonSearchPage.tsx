import * as React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import { Pokemon } from '../types';

export interface PokemonSearchPageProps {
  pokemon: Partial<Pokemon>[];
}

const PokemonSearchPage: React.FC<PokemonSearchPageProps> = ({ pokemon }) => {
  return (
    <Container>
      <Typography variant="h4">Pokemon Search</Typography>

      {pokemon.map(pokemon => (
        <div key={pokemon.id}>
          <Typography variant="subtitle1">{pokemon.name && pokemon.name.english}</Typography>
        </div>
      ))}
    </Container>
  );
}

export default PokemonSearchPage;
