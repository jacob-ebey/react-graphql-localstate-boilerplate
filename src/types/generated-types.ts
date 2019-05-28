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

export type Item = Node & {
  __typename?: "Item";
  id: Scalars["ID"];
  pokedexNumber: Scalars["Int"];
  nameSearch: Scalars["String"];
  name: MultiLang;
};

export type ItemNameArgs = {
  where?: Maybe<MultiLangWhereInput>;
};

export type MultiLang = {
  __typename?: "MultiLang";
  english: Scalars["String"];
  japanese: Scalars["String"];
  chinese: Scalars["String"];
};

export type MultiLangWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<MultiLangWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<MultiLangWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<MultiLangWhereInput>>;
  english?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  english_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  english_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  english_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values less than the given value. */
  english_lt?: Maybe<Scalars["String"]>;
  /** All values less than or equal the given value. */
  english_lte?: Maybe<Scalars["String"]>;
  /** All values greater than the given value. */
  english_gt?: Maybe<Scalars["String"]>;
  /** All values greater than or equal the given value. */
  english_gte?: Maybe<Scalars["String"]>;
  /** All values containing the given string. */
  english_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  english_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  english_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  english_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  english_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string. */
  english_not_ends_with?: Maybe<Scalars["String"]>;
  japanese?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  japanese_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  japanese_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  japanese_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values less than the given value. */
  japanese_lt?: Maybe<Scalars["String"]>;
  /** All values less than or equal the given value. */
  japanese_lte?: Maybe<Scalars["String"]>;
  /** All values greater than the given value. */
  japanese_gt?: Maybe<Scalars["String"]>;
  /** All values greater than or equal the given value. */
  japanese_gte?: Maybe<Scalars["String"]>;
  /** All values containing the given string. */
  japanese_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  japanese_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  japanese_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  japanese_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  japanese_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string. */
  japanese_not_ends_with?: Maybe<Scalars["String"]>;
  chinese?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  chinese_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  chinese_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  chinese_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values less than the given value. */
  chinese_lt?: Maybe<Scalars["String"]>;
  /** All values less than or equal the given value. */
  chinese_lte?: Maybe<Scalars["String"]>;
  /** All values greater than the given value. */
  chinese_gt?: Maybe<Scalars["String"]>;
  /** All values greater than or equal the given value. */
  chinese_gte?: Maybe<Scalars["String"]>;
  /** All values containing the given string. */
  chinese_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  chinese_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  chinese_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  chinese_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  chinese_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string. */
  chinese_not_ends_with?: Maybe<Scalars["String"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  setDrawerOpen: Scalars["Boolean"];
};

export type MutationSetDrawerOpenArgs = {
  open: Scalars["Boolean"];
};

/** An object with an ID */
export type Node = {
  __typename?: "Node";
  /** The id of the object. */
  id: Scalars["ID"];
};

export type Pokemon = Node & {
  __typename?: "Pokemon";
  id: Scalars["ID"];
  pokedexNumber: Scalars["Int"];
  nameSearch: Scalars["String"];
  name: MultiLang;
  types?: Maybe<Array<PokemonType>>;
  base: PokemonBaseStats;
};

export type PokemonNameArgs = {
  where?: Maybe<MultiLangWhereInput>;
};

export type PokemonTypesArgs = {
  where?: Maybe<PokemonTypeWhereInput>;
  orderBy?: Maybe<PokemonTypeOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type PokemonBaseArgs = {
  where?: Maybe<PokemonBaseStatsWhereInput>;
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

export type PokemonBaseStatsWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PokemonBaseStatsWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PokemonBaseStatsWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PokemonBaseStatsWhereInput>>;
  hp?: Maybe<Scalars["Float"]>;
  /** All values that are not equal to given value. */
  hp_not?: Maybe<Scalars["Float"]>;
  /** All values that are contained in given list. */
  hp_in?: Maybe<Array<Scalars["Float"]>>;
  /** All values that are not contained in given list. */
  hp_not_in?: Maybe<Array<Scalars["Float"]>>;
  /** All values less than the given value. */
  hp_lt?: Maybe<Scalars["Float"]>;
  /** All values less than or equal the given value. */
  hp_lte?: Maybe<Scalars["Float"]>;
  /** All values greater than the given value. */
  hp_gt?: Maybe<Scalars["Float"]>;
  /** All values greater than or equal the given value. */
  hp_gte?: Maybe<Scalars["Float"]>;
  attack?: Maybe<Scalars["Float"]>;
  /** All values that are not equal to given value. */
  attack_not?: Maybe<Scalars["Float"]>;
  /** All values that are contained in given list. */
  attack_in?: Maybe<Array<Scalars["Float"]>>;
  /** All values that are not contained in given list. */
  attack_not_in?: Maybe<Array<Scalars["Float"]>>;
  /** All values less than the given value. */
  attack_lt?: Maybe<Scalars["Float"]>;
  /** All values less than or equal the given value. */
  attack_lte?: Maybe<Scalars["Float"]>;
  /** All values greater than the given value. */
  attack_gt?: Maybe<Scalars["Float"]>;
  /** All values greater than or equal the given value. */
  attack_gte?: Maybe<Scalars["Float"]>;
  defense?: Maybe<Scalars["Float"]>;
  /** All values that are not equal to given value. */
  defense_not?: Maybe<Scalars["Float"]>;
  /** All values that are contained in given list. */
  defense_in?: Maybe<Array<Scalars["Float"]>>;
  /** All values that are not contained in given list. */
  defense_not_in?: Maybe<Array<Scalars["Float"]>>;
  /** All values less than the given value. */
  defense_lt?: Maybe<Scalars["Float"]>;
  /** All values less than or equal the given value. */
  defense_lte?: Maybe<Scalars["Float"]>;
  /** All values greater than the given value. */
  defense_gt?: Maybe<Scalars["Float"]>;
  /** All values greater than or equal the given value. */
  defense_gte?: Maybe<Scalars["Float"]>;
  spAttack?: Maybe<Scalars["Float"]>;
  /** All values that are not equal to given value. */
  spAttack_not?: Maybe<Scalars["Float"]>;
  /** All values that are contained in given list. */
  spAttack_in?: Maybe<Array<Scalars["Float"]>>;
  /** All values that are not contained in given list. */
  spAttack_not_in?: Maybe<Array<Scalars["Float"]>>;
  /** All values less than the given value. */
  spAttack_lt?: Maybe<Scalars["Float"]>;
  /** All values less than or equal the given value. */
  spAttack_lte?: Maybe<Scalars["Float"]>;
  /** All values greater than the given value. */
  spAttack_gt?: Maybe<Scalars["Float"]>;
  /** All values greater than or equal the given value. */
  spAttack_gte?: Maybe<Scalars["Float"]>;
  spDefense?: Maybe<Scalars["Float"]>;
  /** All values that are not equal to given value. */
  spDefense_not?: Maybe<Scalars["Float"]>;
  /** All values that are contained in given list. */
  spDefense_in?: Maybe<Array<Scalars["Float"]>>;
  /** All values that are not contained in given list. */
  spDefense_not_in?: Maybe<Array<Scalars["Float"]>>;
  /** All values less than the given value. */
  spDefense_lt?: Maybe<Scalars["Float"]>;
  /** All values less than or equal the given value. */
  spDefense_lte?: Maybe<Scalars["Float"]>;
  /** All values greater than the given value. */
  spDefense_gt?: Maybe<Scalars["Float"]>;
  /** All values greater than or equal the given value. */
  spDefense_gte?: Maybe<Scalars["Float"]>;
  speed?: Maybe<Scalars["Float"]>;
  /** All values that are not equal to given value. */
  speed_not?: Maybe<Scalars["Float"]>;
  /** All values that are contained in given list. */
  speed_in?: Maybe<Array<Scalars["Float"]>>;
  /** All values that are not contained in given list. */
  speed_not_in?: Maybe<Array<Scalars["Float"]>>;
  /** All values less than the given value. */
  speed_lt?: Maybe<Scalars["Float"]>;
  /** All values less than or equal the given value. */
  speed_lte?: Maybe<Scalars["Float"]>;
  /** All values greater than the given value. */
  speed_gt?: Maybe<Scalars["Float"]>;
  /** All values greater than or equal the given value. */
  speed_gte?: Maybe<Scalars["Float"]>;
};

export type PokemonSkill = Node & {
  __typename?: "PokemonSkill";
  id: Scalars["ID"];
  pokedexNumber: Scalars["Int"];
  name: MultiLang;
  accuracy: Scalars["Int"];
  power: Scalars["Int"];
  pp: Scalars["Int"];
  type: PokemonType;
};

export type PokemonSkillNameArgs = {
  where?: Maybe<MultiLangWhereInput>;
};

export type PokemonSkillTypeArgs = {
  where?: Maybe<PokemonTypeWhereInput>;
};

export type PokemonType = Node & {
  __typename?: "PokemonType";
  id: Scalars["ID"];
  english: Scalars["String"];
  chinese: Scalars["String"];
  japanese: Scalars["String"];
};

export enum PokemonTypeOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  EnglishAsc = "english_ASC",
  EnglishDesc = "english_DESC",
  ChineseAsc = "chinese_ASC",
  ChineseDesc = "chinese_DESC",
  JapaneseAsc = "japanese_ASC",
  JapaneseDesc = "japanese_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC"
}

export type PokemonTypeWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PokemonTypeWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PokemonTypeWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PokemonTypeWhereInput>>;
  id?: Maybe<Scalars["ID"]>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars["ID"]>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars["ID"]>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars["ID"]>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars["ID"]>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars["ID"]>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  english?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  english_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  english_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  english_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values less than the given value. */
  english_lt?: Maybe<Scalars["String"]>;
  /** All values less than or equal the given value. */
  english_lte?: Maybe<Scalars["String"]>;
  /** All values greater than the given value. */
  english_gt?: Maybe<Scalars["String"]>;
  /** All values greater than or equal the given value. */
  english_gte?: Maybe<Scalars["String"]>;
  /** All values containing the given string. */
  english_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  english_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  english_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  english_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  english_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string. */
  english_not_ends_with?: Maybe<Scalars["String"]>;
  chinese?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  chinese_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  chinese_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  chinese_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values less than the given value. */
  chinese_lt?: Maybe<Scalars["String"]>;
  /** All values less than or equal the given value. */
  chinese_lte?: Maybe<Scalars["String"]>;
  /** All values greater than the given value. */
  chinese_gt?: Maybe<Scalars["String"]>;
  /** All values greater than or equal the given value. */
  chinese_gte?: Maybe<Scalars["String"]>;
  /** All values containing the given string. */
  chinese_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  chinese_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  chinese_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  chinese_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  chinese_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string. */
  chinese_not_ends_with?: Maybe<Scalars["String"]>;
  japanese?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  japanese_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  japanese_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  japanese_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values less than the given value. */
  japanese_lt?: Maybe<Scalars["String"]>;
  /** All values less than or equal the given value. */
  japanese_lte?: Maybe<Scalars["String"]>;
  /** All values greater than the given value. */
  japanese_gt?: Maybe<Scalars["String"]>;
  /** All values greater than or equal the given value. */
  japanese_gte?: Maybe<Scalars["String"]>;
  /** All values containing the given string. */
  japanese_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  japanese_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  japanese_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  japanese_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  japanese_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string. */
  japanese_not_ends_with?: Maybe<Scalars["String"]>;
};

export type Query = {
  __typename?: "Query";
  searchPokemon: Array<Pokemon>;
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
  searchPokemon: Array<
    { __typename?: "Pokemon" } & Pick<Pokemon, "id" | "pokedexNumber"> & {
        name: { __typename?: "MultiLang" } & Pick<MultiLang, "english">;
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
