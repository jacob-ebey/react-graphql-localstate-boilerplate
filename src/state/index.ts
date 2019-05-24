import GMR from 'graphql-merge-resolvers';

import drawer from './drawer/defaults';
import DrawerResolver from './drawer/resolver';

export * from './types';

export const defaults = {
  drawer
};

export const resolvers = GMR.merge([
  DrawerResolver
]) as any;
