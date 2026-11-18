// Everything about me that isn't a project. Edit here, every page updates.

export const me = {
  name: 'Irfan',
  fullName: 'Muhammad Irfan',
  role: 'Data Science & Analytics | Information Systems @ SMU',
  // the address the contact form (formsubmit.co) delivers to (same one as on the resume)
  contactEmail: 'mirfan.mn.2024@computing.smu.edu.sg',
  degree: "Information Systems (Business Analytics) with a second major in Data Science at SMU, graduating 2028",
  // DRAFT: needs Irfan's sign-off
  lede: 'I build passion projects about things I actually care about: my CS2 games, the people who move markets, and tools I wish existed. Each one is a story from start to finish, dead ends included.',
  // About Me on the home page: kept plain on purpose
  // (experience goes in a separate, more in-depth About page later)
  about: [
    "I'm a Year 3 Information Systems student at Singapore Management University, on the Business Analytics track with a second major in Data Science and Analytics. I graduate in 2028.",
  ],
};

// numbers in the hero strip (keep them true)
export const stats = [
  { value: '3', label: 'case studies' },
  { value: '4', label: 'production modules shipped at Mekari' },
  { value: '1', label: 'Chrome extension live' },
  { value: "'28", label: 'SMU graduate' },
];

// three columns, like the template. `fa` = Font Awesome icon class.
// Fundamentals only: no overlaps (e.g. SQL vs MySQL), no "everyone has it" items (Git, REST, testing).
export const skills = [
  { fa: 'fas fa-search-plus', title: 'Data Analysis', items: ['Python', 'SQL', 'pandas', 'NumPy', 'matplotlib'] },
  { fa: 'fas fa-chart-pie', title: 'Machine Learning & Statistics', items: ['scikit-learn', 'statsmodels', 'Regression & classification', 'Hypothesis testing'] },
  { fa: 'fas fa-cogs', title: 'Engineering & Cloud', items: ['TypeScript', 'React', 'Node.js', 'Docker', 'Google Cloud'] },
  { fa: 'fas fa-robot', title: 'AI & Agents', items: ['LLM agents (Google ADK, Gemini API)', 'Model Context Protocol (MCP)', 'Tool calling & guardrails', 'Claude Code'] },
];

// certifications: add real ones here (name, issuer, year, optional link)
export const certifications: { name: string; issuer: string; year: string; href?: string }[] = [
  // { name: 'Google Data Analytics', issuer: 'Coursera', year: '2025', href: 'https://...' },
];

// small "receipts" under the intro on the home page
export const receipts = [
  { text: "Information Systems + Data Science @ SMU, class of '28" },
  { text: 'Software engineer intern @ Mekari, Jakarta', note: '← shipped 4 production modules here' },
];

export const links = {
  email: 'mailto:mirfan.mn.2024@computing.smu.edu.sg',
  linkedin: 'https://www.linkedin.com/in/muhammad-irfan-bin-muhammad-noor-smu',
  github: 'https://github.com/irfanmno',
};

export const timeline = [
  {
    when: 'May – Aug 2026',
    title: 'Software engineer intern, Mekari · Jakarta',
    text: 'Shipped 4 production modules for an asset management product used by Indonesian businesses. Built logging that cut debugging time by ~70%.',
  },
  { when: 'Apr 2025 – now', title: 'Volunteer mentor, THRIVE · Woodlands Social Centre', text: 'Math and English mentoring for kids.' },
  { when: 'Aug 2024 – 2028', title: 'SMU · Information Systems + Data Science', text: '[anything you want to add]' },
];

export const hobbies = [
  { emoji: '🏓', title: 'Table tennis', chip: 'the only Malay in the CCA', text: 'Secondary school, JC and uni. The only Malay in the CCA every single time.' },
  { emoji: '⚽', title: 'Football', chip: 'YNWA', text: "Liverpool. You'll never walk alone." },
  { emoji: '🏋️', title: 'Gym', chip: '54 → 76 kg', text: '+22 kg in 3 months. No lie. (Lots of unhealthy eating.)', gym: [54, 76] },
  { emoji: '📚', title: 'Homebody', chip: 'Tintin + Frozen', text: 'Rereading my old Tintin comics. Unapologetic Frozen enjoyer.' },
];

// the Now page. Update the date every time you change it.
export const now = {
  updated: '2026-11-17',
  summary: 'Test 3 of my CS2 A/B testing. Market sentiment. Building this site.',
  building: [
    { when: 'test 3', title: 'CS2 A/B testing', href: '/projects/cs2/', text: 'Planned CT rushes off a good spawn, 2-3 per half. About 20 matches, then the result gets posted.' },
    { when: 'day 1', title: 'Market sentiment', href: '/projects/market/', text: 'Already busted one myth (Ronaldo and Coca-Cola). Not financial advice 😛' },
    { when: 'ongoing', title: 'This site', text: "You're looking at it. It's a project too." },
  ],
  next: [
    { when: 'just started', title: 'Rocket League', text: '[one-line hook]' },
    { when: 'idea', title: "Statistically, it's my turn", text: 'Predicting where undergrads land internships.' },
  ],
};

// commands for the ~ console easter egg
export const consoleLines = {
  whoami: "irfan · SMU IS + DS '28 · ex-SWE intern @ Mekari · FACEIT peak lvl 8",
  stats: '138 matches · 52.9% wins · level 4 → peak 8 · still not losing all my games',
  tilt: 'tilt check: 0 tilt detected after losses.',
  nfa: 'this is not financial advice 😛',
  ynwa: "you'll never walk alone ❤️",
};
