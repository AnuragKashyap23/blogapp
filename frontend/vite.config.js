import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // if using React
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),        // if you use React
    tailwindcss(),  // Tailwind plugin
  ],
});
