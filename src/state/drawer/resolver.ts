import { loader } from 'graphql.macro';

import { DrawerOpenQuery, DrawerState, SetDrawerOpenMutationVariables } from '../../types';
import { Ctx } from '../types';

const DrawerOpenQueryGQL = loader('./queries/DrawerOpen.graphql');

export default {
  Mutation: {
    setDrawerOpen(_: DrawerState, { open }: SetDrawerOpenMutationVariables, { cache }: Ctx): boolean {
      cache.writeQuery<DrawerOpenQuery>({
        query: DrawerOpenQueryGQL,
        data: {
          drawer: {
            open,
            __typename: 'DrawerState'
          }
        }
      });

      return open;
    }
  }
};
