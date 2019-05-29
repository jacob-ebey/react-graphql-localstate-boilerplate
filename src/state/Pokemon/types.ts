export interface PokemonImage {
  readonly full?: string;
  readonly sprite?: string;
  readonly thumbnail?: string;
  readonly __typename: 'PokemonImage';
}

export interface PokemonState {
  readonly images: PokemonImage;
  readonly __typename: 'Pokemon';
}
