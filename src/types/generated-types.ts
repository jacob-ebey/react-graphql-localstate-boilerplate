export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type DrawerState = {
  __typename?: "DrawerState";
  open: Scalars["Boolean"];
};

export type Item = {
  __typename?: "Item";
  id: Scalars["ID"];
  pokedexNumber: Scalars["Int"];
  nameSearch: Scalars["String"];
  name: MultiLang;
};

export type MultiLang = {
  __typename?: "MultiLang";
  english: Scalars["String"];
  japanese: Scalars["String"];
  chinese: Scalars["String"];
};

export type MultiLangInput = {
  english: Scalars["String"];
  japanese: Scalars["String"];
  chinese: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  setDrawerOpen: Scalars["Boolean"];
  addToParty?: Maybe<Scalars["Boolean"]>;
  removeFromParty?: Maybe<Scalars["Boolean"]>;
};

export type MutationSetDrawerOpenArgs = {
  open: Scalars["Boolean"];
};

export type MutationAddToPartyArgs = {
  pokemon: PokemonPartyInput;
};

export type MutationRemoveFromPartyArgs = {
  id: Scalars["ID"];
};

export type PartyPokemon = {
  __typename?: "PartyPokemon";
  id: Scalars["ID"];
  pokedexNumber: Scalars["Int"];
  name: MultiLang;
};

export type PartyState = {
  __typename?: "PartyState";
  activeCount: Scalars["Int"];
  activeParty?: Maybe<Array<PartyPokemon>>;
};

export type Pokemon = {
  __typename?: "Pokemon";
  id: Scalars["ID"];
  pokedexNumber: Scalars["Int"];
  nameSearch: Scalars["String"];
  name: MultiLang;
  types: Array<PokemonType>;
  base: PokemonBaseStats;
  images: PokemonImage;
  inParty: Scalars["Boolean"];
};

export type PokemonBaseStats = {
  __typename?: "PokemonBaseStats";
  hp: Scalars["Float"];
  attack: Scalars["Float"];
  defense: Scalars["Float"];
  spAttack: Scalars["Float"];
  spDefense: Scalars["Float"];
  speed: Scalars["Float"];
};

export type PokemonImage = {
  __typename?: "PokemonImage";
  full?: Maybe<Scalars["String"]>;
  sprite?: Maybe<Scalars["String"]>;
  thumbnail?: Maybe<Scalars["String"]>;
};

export type PokemonPartyInput = {
  id: Scalars["ID"];
  pokedexNumber: Scalars["Int"];
  name: MultiLangInput;
};

export type PokemonSearchResult = {
  __typename?: "PokemonSearchResult";
  total: Scalars["Int"];
  results: Array<Pokemon>;
};

export type PokemonSkill = {
  __typename?: "PokemonSkill";
  id: Scalars["ID"];
  pokedexNumber: Scalars["Int"];
  name: MultiLang;
  accuracy: Scalars["Int"];
  power: Scalars["Int"];
  pp: Scalars["Int"];
  type: PokemonType;
};

export type PokemonType = {
  __typename?: "PokemonType";
  id: Scalars["ID"];
  english: Scalars["String"];
  chinese: Scalars["String"];
  japanese: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  searchPokemon?: Maybe<PokemonSearchResult>;
  pokemon?: Maybe<Pokemon>;
  searchItems: Array<Item>;
  item?: Maybe<Item>;
  drawer: DrawerState;
  party: PartyState;
};

export type QuerySearchPokemonArgs = {
  query?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
  types?: Maybe<Array<Scalars["String"]>>;
};

export type QueryPokemonArgs = {
  id?: Maybe<Scalars["ID"]>;
  pokedexNumber?: Maybe<Scalars["Int"]>;
};

export type QuerySearchItemsArgs = {
  query: Scalars["String"];
  first?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

export type QueryItemArgs = {
  id?: Maybe<Scalars["ID"]>;
  pokedexNumber?: Maybe<Scalars["Int"]>;
};
export type AppQueryVariables = {};

export type AppQuery = { __typename?: "Query" } & {
  drawer: { __typename?: "DrawerState" } & Pick<DrawerState, "open">;
};

export type DrawerQueryVariables = {};

export type DrawerQuery = { __typename?: "Query" } & {
  drawer: { __typename?: "DrawerState" } & Pick<DrawerState, "open">;
  party: { __typename?: "PartyState" } & Pick<PartyState, "activeCount">;
};

export type PokemonSearchPageQueryVariables = {
  query?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
  types?: Maybe<Array<Scalars["String"]>>;
};

export type PokemonSearchPageQuery = { __typename?: "Query" } & {
  searchPokemon: Maybe<
    { __typename?: "PokemonSearchResult" } & Pick<
      PokemonSearchResult,
      "total"
    > & {
        results: Array<
          { __typename?: "Pokemon" } & Pick<
            Pokemon,
            "id" | "pokedexNumber" | "inParty"
          > & {
              name: { __typename?: "MultiLang" } & Pick<
                MultiLang,
                "english" | "japanese" | "chinese"
              >;
              images: { __typename?: "PokemonImage" } & Pick<
                PokemonImage,
                "thumbnail"
              >;
            }
        >;
      }
  >;
};

export type ToolbarQueryVariables = {};

export type ToolbarQuery = { __typename?: "Query" } & {
  drawer: { __typename?: "DrawerState" } & Pick<DrawerState, "open">;
};

export type SetDrawerOpenMutationVariables = {
  open: Scalars["Boolean"];
};

export type SetDrawerOpenMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "setDrawerOpen"
>;

export type DrawerOpenQueryVariables = {};

export type DrawerOpenQuery = { __typename?: "Query" } & {
  drawer: { __typename?: "DrawerState" } & Pick<DrawerState, "open">;
};

export type AddToPartyMutationVariables = {
  pokemon: PokemonPartyInput;
};

export type AddToPartyMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "addToParty"
>;

export type RemoveFromPartyMutationVariables = {
  id: Scalars["ID"];
};

export type RemoveFromPartyMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "removeFromParty"
>;

export type ActivePartyQueryVariables = {};

export type ActivePartyQuery = { __typename?: "Query" } & {
  party: { __typename?: "PartyState" } & Pick<PartyState, "activeCount"> & {
      activeParty: Maybe<
        Array<
          { __typename?: "PartyPokemon" } & Pick<
            PartyPokemon,
            "id" | "pokedexNumber"
          > & {
              name: { __typename?: "MultiLang" } & Pick<
                MultiLang,
                "english" | "japanese" | "chinese"
              >;
            }
        >
      >;
    };
};
