# Portfolio website

My personal site: an intro to me plus my projects. Built with [Astro](https://astro.build) and deployed to GitHub Pages on every push to `main` (`.github/workflows/deploy.yml`). Live at https://irfanmno.github.io.

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static site -> dist/
```

## Where things live

| I want to change… | Edit |
|---|---|
| A project (add, update, reorder, feature on home) | `src/content/projects/<name>.md(x)`: one file per project |
| My intro, timeline, hobbies, links, console lines | `src/data/site.ts` |
| The Now page | `now` in `src/data/site.ts` (update the date!) |
| Colours, spacing, fonts | `src/styles/global.css` (theme tokens at the top) |
| Header / footer | `src/components/Header.astro`, `Footer.astro` |
| Page layouts | `src/pages/` |

### Projects

Each file has a `kind` in its frontmatter:
- `story`: gets a page at `/projects/<file name>/`. Write the body in MDX, **one `##` heading per chapter**. Each chapter becomes its own panel and shows up in the sidebar automatically.
- `build`: one card under "Other builds".
- `soon`: a dashed "coming soon" tile (not clickable).

`order` sets the order (lower first), and `featured: true` puts a story on the home page (max 3).

Story building blocks (import them at the top of the `.mdx`):

```mdx
import Figure from '../../components/story/Figure.astro';   // <Figure src="/img/x.jpg" caption="..." /> or a placeholder
import Blooper from '../../components/story/Blooper.astro'; // <Blooper>a dead end</Blooper>
import Note from '../../components/story/Note.astro';       // <Note>handwritten aside</Note>
import BarChart from '../../components/story/BarChart.astro'; // interactive bars, hover for notes
```

Images go in `public/img/` and are referenced as `/img/<file>`.

## Notes
- Astro 6.4 (Astro 7 needs Node ≥ 22.23; this machine has 22.20).
- `mockup/` is the static design mock-up the site was built from. It's kept for reference and not part of the build.
- `BRIEF.md` = design decisions. `PROGRESS.md` = where things stand.
