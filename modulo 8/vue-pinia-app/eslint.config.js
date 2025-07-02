import vue from 'eslint-plugin-vue'
import prettier from 'eslint-config-prettier'

export default [
  {
    files: ['**/*.js', '**/*.vue'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      vue,
    },
    rules: {
      ...vue.configs.recommended.rules,
    },
  },
  prettier,
]
