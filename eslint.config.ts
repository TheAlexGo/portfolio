import antfu from '@antfu/eslint-config';
import eslintPluginBetterTailwindcss from 'eslint-plugin-better-tailwindcss';

export default antfu(
  {
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
  },
  {
    plugins: {
      'better-tailwindcss': eslintPluginBetterTailwindcss,
    },
    rules: {
      ...eslintPluginBetterTailwindcss.configs['recommended-warn'].rules,
      ...eslintPluginBetterTailwindcss.configs['recommended-error'].rules,
    },
    settings: {
      'better-tailwindcss': {
        entryPoint: 'src/style.css',
      },
    },
  },
  {
    rules: {
      'react-refresh/only-export-components': 'off',
    },
  },
);
