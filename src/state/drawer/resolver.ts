import { gql } from 'graphql.macro';

import { Ctx, PartialClientState } from '../types'
import { SetDrawerOpenArgs } from './types'

export default {
  Mutation: {
    setDrawerOpen: (_: any, { open }: SetDrawerOpenArgs, { cache }: Ctx) => {
      cache.writeQuery<PartialClientState>({
        query: gql`
          query {
            drawer @client{
              open
            }
          }
        `,
        data: {
          drawer: {
            open,
            __typename: 'DrawerState'
          }
        }
      });
    }
  }
};
