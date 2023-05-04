import { RuleLevel, RuleTemplate } from '@/types/sql-review';

/* eslint-disable @typescript-eslint/no-var-requires */
const jsYaml = require('js-yaml');
const fs = require('fs');
const path = require('path');

export const LEVEL_LIST = [RuleLevel.ERROR, RuleLevel.WARNING, RuleLevel.DISABLED];

export type GuidelineTemplate = {
  id: string;
  ruleList: RuleTemplate[];
};

export const sqlReviewSchema = jsYaml.load(
  fs.readFileSync(path.resolve('data/sql-review-schema.yaml'), 'utf8'),
);

const sqlReviewProdTemplate = jsYaml.load(
  fs.readFileSync(path.resolve('data/sql-review.prod.yaml'), 'utf8'),
);

const sqlReviewDevTemplate = jsYaml.load(
  fs.readFileSync(path.resolve('data/sql-review.dev.yaml'), 'utf8'),
);

// Build the frontend template list based on schema and template.
export const guidelineTemplateList: GuidelineTemplate[] = (function () {
  const ruleSchemaMap = (sqlReviewSchema.ruleList as RuleTemplate[]).reduce((map, ruleSchema) => {
    map.set(ruleSchema.type, ruleSchema);
    return map;
  }, new Map<string, RuleTemplate>());
  const templateList = [sqlReviewProdTemplate, sqlReviewDevTemplate] as {
    id: string;
    ruleList: {
      type: string;
      level: typeof RuleLevel;
      payload?: { [key: string]: any };
    }[];
  }[];

  return templateList.map((template) => {
    const ruleList: RuleTemplate[] = [];

    for (const rule of template.ruleList) {
      const ruleTemplate = ruleSchemaMap.get(rule.type);
      if (!ruleTemplate) {
        continue;
      }

      // Using template rule payload to override the component list.
      const componentList = ruleTemplate.componentList.map((component) => {
        if (rule.payload && rule.payload[component.key]) {
          return {
            ...component,
            payload: {
              ...component.payload,
              default: rule.payload[component.key],
            },
          };
        }
        return component;
      });
      ruleList.push({
        ...ruleTemplate,
        level: rule.level,
        componentList,
      });
    }

    return {
      id: template.id,
      ruleList,
    };
  });
})();