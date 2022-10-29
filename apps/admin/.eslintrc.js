/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');
const { resolve } = require('node:path');

const vueProject = resolve(__dirname, 'tsconfig.vue.json');
const configProject = resolve(__dirname, 'tsconfig.config.json');
const vitestProject = resolve(__dirname, 'tsconfig.vitest.json');

module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: [
    require.resolve('@portfolio/style-guide/eslint/browser'),
    require.resolve('@portfolio/style-guide/eslint/typescript'),
    require.resolve('@portfolio/style-guide/eslint/vue')
  ],
  parserOptions: {
    project: vueProject
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: vueProject
      }
    }
  },
  overrides: [
    // Override config files
    {
      files: ['vite.config.*', 'vitest.config.*', '.eslintrc.js'],
      extends: [
        require.resolve('@portfolio/style-guide/eslint/node'),
        require.resolve('@portfolio/style-guide/eslint/typescript')
      ],
      parserOptions: {
        project: configProject
      },
      settings: {
        'import/resolver': {
          typescript: {
            project: configProject
          }
        }
      }
    },

    // Override vitest files
    {
      files: ['src/**/*.spec.ts'],
      extends: [
        require.resolve('@portfolio/style-guide/eslint/node'),
        require.resolve('@portfolio/style-guide/eslint/typescript'),
        require.resolve('@portfolio/style-guide/eslint/vitest')
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
