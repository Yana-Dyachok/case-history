/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    resolve: {
      alias: {
        'node-fetch': 'isomorphic-fetch',
      },
    },
    plugins: [react()],
    base: '/case-history/',
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['./src/test_setup/setupTests.ts'],
      coverage: {
        provider: 'v8',
        reporter: ['text', 'json', 'html'],
      },
    },
    css: {
      modules: {},
    },
  };
});
