module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'prettier', 'plugin:prettier/recommended', 'plugin:import/warnings', 'plugin:storybook/recommended'],
  plugins: ['react', '@typescript-eslint', 'prettier', 'import'],
  env: {
    browser: true,
    jasmine: true,
    jest: true
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect'
    }
  },
  root: true,
  parser: '@typescript-eslint/parser',
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'arrow-body-style': ['error', 'as-needed'],
    'newline-before-return': 'error',
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-empty-pattern': 'warn',
    'prefer-template': 'error',
    'react/display-name': 'off',
    'react/jsx-curly-brace-presence': ['error', {
      props: 'never',
      children: 'ignore'
    }],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/self-closing-comp': 'error',
    'max-len': ["error", {
      "code": 120,
      "tabWidth": 2,
      "ignoreUrls": true
    }],
    'prettier/prettier': ['error', {
      singleQuote: true,
      tabWidth: 2,
      useTabs: false,
      arrowParens: 'avoid',
      semi: false,
      bracketSameLine: false
    }],
    'object-curly-newline': ["error", {
      "ObjectExpression": {
        "consistent": true,
        "multiline": true
      },
      "ObjectPattern": {
        "consistent": true,
        "multiline": true
      },
      "ImportDeclaration": "never",
      "ExportDeclaration": {
        "multiline": true,
        "minProperties": 3
      }
    }],
    'import/order': ['warn', {
      groups: ['external', 'builtin', 'internal', 'sibling', 'parent', 'index'],
      'newlines-between': 'never',
      pathGroupsExcludedImportTypes: ['react'],
      pathGroups: [{
        pattern: 'components',
        group: 'internal'
      }, {
        pattern: 'common',
        group: 'internal'
      }, {
        pattern: 'routes/ **',
        group: 'internal'
      }, {
        pattern: 'assets/**',
        group: 'internal',
        position: 'after'
      }],
      alphabetize: {
        order: 'asc',
        caseInsensitive: true
      }
    }]
  }
};
