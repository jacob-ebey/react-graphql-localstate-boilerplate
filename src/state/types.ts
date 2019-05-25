import { InMemoryCache } from 'apollo-boost';

export interface Ctx {
  readonly cache: InMemoryCache;
}
