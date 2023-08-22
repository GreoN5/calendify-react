import type { StorybookConfig } from '@storybook/react-vite';
import * as path from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  async viteFinal(config, options) {
    if (config?.resolve?.alias) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@/': path.resolve(__dirname, '../src'),
        '@/components': path.resolve(__dirname, '../src/components'),
        '@/hooks': path.resolve(__dirname, '../src/hooks'),
        '@/utils': path.resolve(__dirname, '../src/utils'),
      };
    }
    return config;
  },
};
export default config;
