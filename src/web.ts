import { WebPlugin } from '@capacitor/core';

import type { InstantPlugin } from './definitions';

export class InstantWeb extends WebPlugin implements InstantPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
