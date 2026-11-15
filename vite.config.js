import fs from 'node:fs';
if (fs.realpathSync.native) {
  fs.realpathSync.native = fs.realpathSync;
}
if (fs.realpath.native) {
  fs.realpath.native = fs.realpath;
}

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: false,
  },
});

