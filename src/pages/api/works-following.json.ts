import { getProjectCategorySlug, projects } from '../../data/projects';

export const prerender = true;

const aspectPattern = ['3/2', '3/4', '6/5', '4/3', '3/2', '5/4'];
const stripYear = (name: string) => name.replace(/^\d{4}\s+/, '');

export function GET() {
  const items = projects
    .filter((project) => getProjectCategorySlug(project) !== 'selected')
    .map((project, index) => ({
      slug: project.slug,
      name: stripYear(project.name),
      cover: project.cover,
      aspect: aspectPattern[index % aspectPattern.length],
      column: index % 2 === 0 ? 1 : 0
    }));

  return new Response(JSON.stringify({ items }), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}
