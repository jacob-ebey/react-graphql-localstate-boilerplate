import * as React from 'react';
import { loader } from 'graphql.macro';
import { useMutation, useQuery } from 'react-apollo-hooks';
import { useDebounce } from 'use-debounce';

import useTextField from '../../hooks/use-text-field';
import PokemonSearchPage from '../../routes/PokemonSearchPage';
import {
  AddToPartyMutation,
  AddToPartyMutationVariables,
  PokemonPartyInput,
  PokemonSearchPageQuery,
  PokemonSearchPageQueryVariables
} from '../../types';

const PokemonSearchPageQueryGQL = loader('./PokemonSearchPageQuery.graphql');
const AddToPartyMutationGQL = loader('../../state/party/mutations/AddToPartyMutation.graphql');

const TodosPageContainer: React.FC = () => {
  const [query, onQueryChange] = useTextField();
  const [resultQuery] = useDebounce(query, 1000);

  const { data, loading } = useQuery<PokemonSearchPageQuery, PokemonSearchPageQueryVariables>(PokemonSearchPageQueryGQL, {
    variables: {
      first: 20,
      query: resultQuery
    }
  });

  const addToParty = useMutation<AddToPartyMutation, AddToPartyMutationVariables>(AddToPartyMutationGQL);

  const result = React.useMemo(() => data && data.searchPokemon, [data]);
  const totalPokemon = React.useMemo(() => (result && result.total) || 0, [result]);
  const pokemon = React.useMemo(() => (result && result.results) || [], [result]);

  const onAddToParty = React.useCallback((pokemon: PokemonPartyInput) => {
    addToParty({
       variables: {
         pokemon
       }
    })
  }, [addToParty]);

  return (
    <PokemonSearchPage
      loadingPokemon={loading}
      totalPokemon={totalPokemon}
      pokemon={pokemon}
      query={query}
      resultQuery={resultQuery}
      onQueryChange={onQueryChange}
      onAddToParty={onAddToParty}
    />
  );
}

export default TodosPageContainer;
