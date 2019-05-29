import { loader } from 'graphql.macro';

import { ActivePartyQuery, AddToPartyMutationVariables, PartyState, PartyPokemon } from '../../types';
import { Ctx } from '../types';

const ActivePartyQueryGQL = loader('./queries/ActivePartyQuery.graphql');

export default {
  PartyState: {
    activeCount({ activeParty }: PartyState) {
      return (activeParty && activeParty.length) || 0;
    }
  },
  Mutation: {
    addToParty(_: any, { pokemon }: AddToPartyMutationVariables, { cache }: Ctx) {
      const newPokemon: PartyPokemon = {
        id: pokemon.id,
        pokedexNumber: pokemon.pokedexNumber,
        name: {
          ...pokemon.name
        },
        __typename: 'PartyPokemon'
      };

      const data = cache.readQuery<ActivePartyQuery>({ query: ActivePartyQueryGQL });

      const party = (data && data.party.activeParty) || [];

      let found = false;
      const activeParty = party.map<PartyPokemon>(p => {
        if (p.id === pokemon.id) {
          found = true;
          return newPokemon;
        }

        return p;
      })

      if (!found) {
        activeParty.push(newPokemon);
      }

      cache.writeQuery<ActivePartyQuery>({
        query: ActivePartyQueryGQL,
        data: {
          party: {
            activeCount: activeParty.length,
            activeParty,
            __typename: 'PartyState'
          }
        }
      });
    }
  }
};
