// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import sitemap from '@astrojs/sitemap';
import { siteConfig } from '@/configs/site-config';

// https://astro.build/config
export default defineConfig({
  vite: {
      plugins: [tailwindcss()],
    },
  site: siteConfig.site,
  integrations: [vue(), sitemap()],
});