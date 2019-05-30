import { loader } from 'graphql.macro';

import {
  ActivePartyQuery,
  MutationAddToPartyArgs,
  PartyState,
  PartyPokemon,
  Pokemon,
  MutationRemoveFromPartyArgs
} from '../../types';
import { Ctx } from '../types';

const ActivePartyQueryGQL = loader('./queries/ActivePartyQuery.graphql');

export default {
  PartyState: {
    activeCount({ activeParty }: PartyState) {
      return (activeParty && activeParty.length) || 0;
    }
  },
  Pokemon: {
    inParty({ id, pokedexNumber }: Partial<Pokemon>, __: any, { cache }: Ctx): boolean {
      const data = cache.readQuery<ActivePartyQuery>({ query: ActivePartyQueryGQL });
      const activeParty = (data && data.party.activeParty) || [];

      return activeParty.some(pokemon => pokemon.id === id || pokemon.pokedexNumber === pokedexNumber);
    }
  },
  Mutation: {
    addToParty(_: any, { pokemon }: MutationAddToPartyArgs, { cache }: Ctx) {
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

      cache.writeData({
        id: `Pokemon:${pokemon.id}`,
        data: {
          inParty: true
        }
      });
    },

    removeFromParty(_: any, { id }: MutationRemoveFromPartyArgs, { cache }: Ctx) {
      const data = cache.readQuery<ActivePartyQuery>({ query: ActivePartyQueryGQL });

      const party = (data && data.party.activeParty) || [];

      const activeParty = party.filter(pokemon => pokemon.id !== id);

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

      cache.writeData({
        id: `Pokemon:${id}`,
        data: {
          inParty: false
        }
      });
    }
  }
};
