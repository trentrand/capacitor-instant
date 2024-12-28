import { registerPlugin } from '@capacitor/core';

import type { InstantPlugin } from './definitions';

const Instant = registerPlugin<InstantPlugin>('Instant', {
  web: () => import('./web').then((m) => new m.InstantWeb()),
});

export * from './definitions';
export { Instant };
