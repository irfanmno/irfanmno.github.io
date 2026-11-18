import { consoleLines } from '../data/site';

// ---- light / dark toggle (follows the system until clicked) ----
const root = document.documentElement;
const tbtn = document.getElementById('theme') as HTMLButtonElement | null;
const isDark = () => (root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches);
const label = () => { if (tbtn) tbtn.textContent = isDark() ? '☀ light' : '☾ dark'; };
label();
tbtn?.addEventListener('click', () => {
  root.dataset.theme = isDark() ? 'light' : 'dark';
  try { localStorage.setItem('theme', root.dataset.theme); } catch {}
  label();
});

// ---- home: highlight the header link of the section on screen ----
const navLinks = [...document.querySelectorAll<HTMLAnchorElement>('.tpl-nav a[data-section]')];
const homeSections = navLinks.map((a) => document.getElementById(a.dataset.section!)).filter(Boolean) as HTMLElement[];
if (location.pathname === '/' && homeSections.length) {
  const spy = () => {
    let cur = '';
    homeSections.forEach((s) => { if (s.getBoundingClientRect().top < innerHeight * 0.4) cur = s.id; });
    navLinks.forEach((a) => (a.dataset.section === cur ? a.setAttribute('aria-current', 'page') : a.removeAttribute('aria-current')));
  };
  addEventListener('scroll', spy, { passive: true });
  spy();
}

// ---- story pages: reading progress + highlight the current chapter ----
const chapterLinks = [...document.querySelectorAll<HTMLAnchorElement>('.chapters a[href^="#"]')];
if (chapterLinks.length) {
  const bar = document.createElement('div');
  bar.className = 'progress';
  document.body.appendChild(bar);
  // A link can cover several chapters (an experiment + its findings): data-sections="id1 id2".
  const targets = chapterLinks
    .flatMap((a, i) => (a.dataset.sections ?? decodeURIComponent(a.hash.slice(1))).split(' ')
      .map((id) => ({ el: document.getElementById(id), i })))
    .filter((t) => t.el)
    .sort((a, b) => a.el!.getBoundingClientRect().top - b.el!.getBoundingClientRect().top);
  const onScroll = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    bar.style.width = (max > 0 ? (scrollY / max) * 100 : 0) + '%';
    let cur = 0;
    const line = Math.min(innerHeight * 0.35, 170); // just below the sticky header, so short chapters still count
    targets.forEach((t) => { if (t.el!.getBoundingClientRect().top < line) cur = t.i; });
    chapterLinks.forEach((a, i) => a.classList.toggle('active', i === cur));
  };
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ---- charts: hover a bar to see its note ----
document.querySelectorAll<HTMLElement>('[data-chart]').forEach((fig) => {
  const tip = fig.querySelector<HTMLElement>('.tip');
  if (!tip) return;
  const idle = tip.textContent;
  fig.querySelectorAll<SVGElement>('[data-tip]').forEach((bar) => {
    bar.addEventListener('mouseenter', () => { tip.textContent = bar.dataset.tip ?? ''; });
    bar.addEventListener('mouseleave', () => { tip.textContent = idle; });
  });
});

// ---- console easter egg (press ~) ----
document.body.insertAdjacentHTML(
  'afterbegin',
  '<div id="console" aria-hidden="true"><div id="out"></div><form id="cform"><span>]</span><input id="cin" autocomplete="off" spellcheck="false" aria-label="console"></form></div>',
);
const con = document.getElementById('console')!;
const out = document.getElementById('out')!;
const cin = document.getElementById('cin') as HTMLInputElement;
const print = (s: string, cls?: string) => {
  const d = document.createElement('div');
  if (cls) d.className = cls;
  d.textContent = s;
  out.appendChild(d);
  out.scrollTop = out.scrollHeight;
};
const go = (p: string) => { location.href = p; return 'loading…'; };
const cmds: Record<string, () => string | null> = {
  help: () => 'commands: whoami, projects, about, now, stats, tilt, nfa, ynwa, clear, exit',
  projects: () => go('/projects/'),
  about: () => go('/about/'),
  now: () => go('/now/'),
  clear: () => { out.innerHTML = ''; return null; },
  exit: () => { toggleCon(false); return null; },
  ...Object.fromEntries(Object.entries(consoleLines).map(([k, v]) => [k, () => v])),
};
function toggleCon(open: boolean) {
  con.classList.toggle('open', open);
  con.setAttribute('aria-hidden', String(!open));
  if (open) {
    setTimeout(() => cin.focus(), 50);
    if (!out.children.length) print('console · type "help"', 'c-dim');
  } else cin.blur();
}
document.addEventListener('keydown', (e) => {
  const typing = (e.target as HTMLElement)?.closest?.('input, textarea') && e.target !== cin;
  if (typing) return;
  if (e.key === '`' || e.key === '~') { e.preventDefault(); toggleCon(!con.classList.contains('open')); }
  else if (e.key === 'Escape') toggleCon(false);
});
con.addEventListener('click', () => cin.focus());
document.getElementById('cform')!.addEventListener('submit', (e) => {
  e.preventDefault();
  const c = cin.value.trim().toLowerCase();
  cin.value = '';
  if (!c) return;
  print('] ' + c, 'c-dim');
  const f = cmds[c];
  const r = f ? f() : `unknown command "${c}". try help`;
  if (r) print(r);
});
