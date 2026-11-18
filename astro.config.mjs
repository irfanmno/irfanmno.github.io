// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import rehypeChapters from './src/lib/rehype-chapters.mjs';
import remarkGfm from 'remark-gfm';

export default defineConfig({
  // GitHub Pages for now; change when a custom domain is set up
  site: 'https://irfanmno.github.io',
  // the About page is now a section on the home page
  redirects: { '/about': '/#about' },
  // stories are .mdx; each `##` chapter becomes its own panel
  integrations: [mdx({ remarkPlugins: [remarkGfm], rehypePlugins: [rehypeChapters] })],
});
