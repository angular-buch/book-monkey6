// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");

module.exports = tseslint.config(
  {
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended
    ],
    processor: angular.processInlineTemplates,
    rules: {
      "@angular-eslint/prefer-on-push-component-change-detection": "off",
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],
      "no-restricted-syntax": [
        "error",
        {
          selector: ":matches(PropertyDefinition, MethodDefinition)[accessibility='private']",
          message: "Use #private instead",
        },
      ],
      "@typescript-eslint/explicit-member-accessibility": ["error", { "accessibility": "no-public" }]
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateAll
    ],
    rules: {
      "@angular-eslint/template/i18n": "off",
      "@angular-eslint/template/no-call-expression": "off",
      "@angular-eslint/template/prefer-ngsrc": "off",
      "@angular-eslint/template/attributes-order": "off"
    },
  }
);
