export type Plan = {
  title: string;
  description: string;
  additionalDescription?: string;
  buttonText: string;
  buttonUrl: string;
  buttonTheme: 'primary-filled' | 'primary-outline';
  changeManagement: PricingTableItem;
  sql: PricingTableItem;
  security: PricingTableItem;
  bespoke: PricingTableItem;
  collaboration: PricingTableItem;
};

export type PricingTableItem = Record<
  string,
  string | boolean | { value: string; tooltip: string }
>;
