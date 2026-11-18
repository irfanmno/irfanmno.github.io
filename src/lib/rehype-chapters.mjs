// Wraps each `##` heading and everything after it (until the next `##`)
// in <section class="chapter">, so every chapter of a story becomes its own panel.
export default function rehypeChapters() {
  return (tree) => {
    const out = [];
    let current = null;
    for (const node of tree.children) {
      if (node.type === 'element' && node.tagName === 'h2') {
        current = { type: 'element', tagName: 'section', properties: { className: ['chapter'] }, children: [node] };
        out.push(current);
      } else if (current && !(node.type === 'mdxjsEsm')) {
        current.children.push(node);
      } else {
        out.push(node);
      }
    }
    tree.children = out;
  };
}
