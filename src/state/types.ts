import { InMemoryCache } from 'apollo-boost';

import { DrawerState } from './drawer/types'

export interface Ctx {
  readonly cache: InMemoryCache;
}

export interface ClientState {
  readonly drawer: DrawerState;
}

export type PartialClientState = RecursivePartial<ClientState>

export type RecursivePartial<T> = {
  [P in keyof T]?:
    T[P] extends (infer U)[] ? RecursivePartial<U>[] :
    T[P] extends object ? RecursivePartial<T[P]> :
    T[P];
};
