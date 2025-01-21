import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  {
    ignores: ['dist'], // Ignore build output
    files: ['**/*.{js,jsx}'], // Target JavaScript and JSX files
    languageOptions: {
      ecmaVersion: 2020, // Set ECMAScript version
      globals: globals.browser, // Use browser globals
    },
    plugins: {
      'react-hooks': reactHooks, // React hooks plugin
      'react-refresh': reactRefresh, // React Refresh plugin
    },
    rules: {
      ...reactHooks.configs.recommended.rules, // React hooks recommended rules
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
];
