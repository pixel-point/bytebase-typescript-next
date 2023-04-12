const longLabels = ['connection', 'synchronize', 'schedule', 'rbac'];
const mediumLabels = [
  'schema',
  'sql-check',
  'terraform',
  'ui',
  'webhook',
  'approval',
  'sso',
  'masking',
  'access-control',
  'roadmap',
  'msa',
];

export const isLabelLong = (label: string) => longLabels.includes(label);
export const isLabelMedium = (label: string) => mediumLabels.includes(label);
