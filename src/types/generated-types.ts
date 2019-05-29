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

export type Mutation = {
  __typename?: "Mutation";
  setDrawerOpen: Scalars["Boolean"];
};

export type MutationSetDrawerOpenArgs = {
  open: Scalars["Boolean"];
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
          { __typename?: "Pokemon" } & Pick<Pokemon, "id" | "pokedexNumber"> & {
              name: { __typename?: "MultiLang" } & Pick<MultiLang, "english">;
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
