import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default {
   optimizeDeps: {
      include: ['app.js'],
   },
   esbuild: {
      jsxInject: `import React from 'react'`,
   },
   server: {
      mimeTypes: {
         js: 'application/javascript',
         mjs: 'application/javascript',
      },
   },
};
