/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');
const { resolve } = require('node:path');

const nodeProject = resolve(__dirname, 'tsconfig.node.json');
const vitestProject = resolve(__dirname, 'tsconfig.vitest.json');

module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: [
    require.resolve('@portfolio/style-guide/eslint/node'),
    require.resolve('@portfolio/style-guide/eslint/typescript')
  ],
  parserOptions: {
    project: nodeProject
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: nodeProject
      }
    }
  },
  overrides: [
    // Override vitest files
    {
      files: ['src/**/*.spec.ts'],
      extends: [
        require.resolve('@portfolio/style-guide/eslint/node'),
        require.resolve('@portfolio/style-guide/eslint/typescript')
      ],
      parserOptions: {
        project: vitestProject
      },
      settings: {
        'import/resolver': {
          typescript: {
            project: vitestProject
          }
        }
      }
    }
  ]
};
