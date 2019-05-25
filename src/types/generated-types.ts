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

export type Mutation = {
  __typename?: "Mutation";
  setDrawerOpen: Scalars["Boolean"];
};

export type MutationSetDrawerOpenArgs = {
  open: Scalars["Boolean"];
};

export type Query = {
  __typename?: "Query";
  drawer: DrawerState;
};
export type AppQueryVariables = {};

export type AppQuery = { __typename?: "Query" } & {
  drawer: { __typename?: "DrawerState" } & Pick<DrawerState, "open">;
};

export type DrawerQueryVariables = {};

export type DrawerQuery = { __typename?: "Query" } & {
  drawer: { __typename?: "DrawerState" } & Pick<DrawerState, "open">;
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
