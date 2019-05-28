import * as React from 'react';
import { loader } from 'graphql.macro';
import { useQuery } from 'react-apollo-hooks';

import PokemonSearchPage from '../../routes/PokemonSearchPage';
import { PokemonSearchPageQuery } from '../../types';

const PokemonSearchPageQueryGQL = loader('./PokemonSearchPageQuery.graphql');

const TodosPageContainer: React.FC = () => {
  const { data } = useQuery<PokemonSearchPageQuery>(PokemonSearchPageQueryGQL);

  const pokemon = (data && data.searchPokemon) || [];

  return <PokemonSearchPage pokemon={pokemon} />;
}

export default TodosPageContainer;
