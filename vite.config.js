import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ghPages from 'vite-plugin-gh-pages';
export default defineConfig({
  base: "/Mobile-Project-Application/", // Ganti dengan nama repositori Anda
  plugins: [react()],
  plugins: [ghPages()],
});





