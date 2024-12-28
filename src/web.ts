import { WebPlugin } from '@capacitor/core';

import type { InstantPlugin } from './definitions';

export class InstantWeb extends WebPlugin implements InstantPlugin {
  // Web platform is never an instant app
  private readonly isInstantAppValue = false;

  async isInstantApp(): Promise<{ value: boolean }> {
    return { value: this.isInstantAppValue };
  }
}
