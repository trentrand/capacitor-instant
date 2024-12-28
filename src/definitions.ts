export interface InstantPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
