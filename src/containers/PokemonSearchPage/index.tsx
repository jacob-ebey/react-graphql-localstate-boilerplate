import * as React from 'react';
import { loader } from 'graphql.macro';
import { useQuery } from 'react-apollo-hooks';
import {useDebounce} from 'use-debounce';

import useTextField from '../../hooks/use-text-field';
import PokemonSearchPage from '../../routes/PokemonSearchPage';
import { PokemonSearchPageQuery, PokemonSearchPageQueryVariables } from '../../types';

const PokemonSearchPageQueryGQL = loader('./PokemonSearchPageQuery.graphql');

const TodosPageContainer: React.FC = () => {
  const [query, onQueryChange] = useTextField();
  const [resultQuery] = useDebounce(query, 1000);

  const { data, loading } = useQuery<PokemonSearchPageQuery, PokemonSearchPageQueryVariables>(PokemonSearchPageQueryGQL, {
    variables: {
      first: 20,
      query: resultQuery
    }
  });

  const result = React.useMemo(() => data && data.searchPokemon, [data]);
  const totalPokemon = React.useMemo(() => (result && result.total) || 0, [result]);
  const pokemon = React.useMemo(() => (result && result.results) || [], [result]);

  return (
    <PokemonSearchPage
      loadingPokemon={loading}
      totalPokemon={totalPokemon}
      pokemon={pokemon}
      query={query}
      resultQuery={resultQuery}
      onQueryChange={onQueryChange}
    />
  );
}

export default TodosPageContainer;
