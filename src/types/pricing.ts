export type Plan = {
  title: string;
  description: string;
  additionalDescription?: string;
  buttonText: string;
  buttonUrl: string;
  buttonTheme: 'primary-filled' | 'primary-outline';
  changeManagement: Item;
  sql: Item;
  security: Item;
  bespoke: Item;
  collaboration: Item;
};

export type Item = Record<string, string | boolean | { value: string; tooltip: string }>;
