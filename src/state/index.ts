import GMR from 'graphql-merge-resolvers';

import drawer from './drawer/defaults';
import DrawerResolver from './drawer/resolver';

import party from './party/defaults';
import PartyResolver from './party/resolver';

import Pokemon from './Pokemon/resolver';

export * from './types';

export const defaults = {
  drawer,
  party
};

export const resolvers = GMR.merge([
  DrawerResolver,
  PartyResolver,
  Pokemon
]) as any;
