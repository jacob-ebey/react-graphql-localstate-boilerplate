import { MultiLang } from '../../types'

export interface PartyPokemon {
  id: string;
  pokedexNumber: number;
  name: MultiLang;
  readonly __typename: 'PartyPokemon';
}

export interface PartyState {
  readonly activeCount: number;
  readonly activeParty: PartyPokemon[];
  readonly __typename: 'PartyState';
}
