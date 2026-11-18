import { getCollection, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>;

const byOrder = (a: Project, b: Project) => a.data.order - b.data.order;

export async function projectsByKind() {
  const all = (await getCollection('projects')).sort(byOrder);
  return {
    stories: all.filter((p) => p.data.kind === 'story'),
    builds: all.filter((p) => p.data.kind === 'build'),
    soon: all.filter((p) => p.data.kind === 'soon'),
  };
}
