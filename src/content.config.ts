import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * One file per project in src/content/projects/.
 * - kind "story": gets its own page at /projects/<file name>/ (write the story in the body, one `##` per chapter)
 * - kind "build": one line on the Projects page ("Other builds")
 * - kind "soon":  a dashed "coming soon" tile, not clickable
 */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    kind: z.enum(['story', 'build', 'soon']),
    order: z.number().default(99),          // lower = shown first
    featured: z.boolean().default(false),   // show on the home page
    hook: z.string(),                       // one-line description
    stack: z.string().optional(),           // e.g. "Python · event studies"
    tags: z.array(z.string()).default([]),  // tech chips on the project card
    repo: z.string().optional(),            // GitHub repo link
    cover: z.string().optional(),           // card image, e.g. /img/cs2-cover.png (until then a drawn cover is used)
    sticker: z.string().optional(),         // small badge, e.g. "day 1 · NFA 😛"
    live: z.boolean().default(false),       // blinking dot on the sticker
    color: z.enum(['cs', 'mkt', 'ext']).optional(),
    deco: z.string().optional(),            // big faded letters in the corner
    bigNum: z.string().optional(),          // the headline number on the tile
    bigNumSmall: z.boolean().default(false),// use for words instead of a number
    numCap: z.string().optional(),          // handwritten caption under bigNum
    crumb: z.string().optional(),           // short name for breadcrumbs
    intro: z.string().optional(),           // paragraph in the story header
    tag: z.string().optional(),             // small label on "Other builds"
    link: z.string().optional(),            // GitHub / external link for builds
    updated: z.coerce.date().optional(),
  }),
});

export const collections = { projects };
