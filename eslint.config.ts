import antfu from '@antfu/eslint-config';

export default antfu({
  react: true,
  stylistic: {
    quotes: 'single',
    semi: true,
  },
  typescript: {
    parserOptions: {
      projectService: true,
    },
  },
});
