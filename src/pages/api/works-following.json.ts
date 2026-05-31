import { imageSrcSet, imageUrl } from '../../data/image-cdn';
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
      cover: imageUrl(project.cover, { w: 720, q: 66, fit: 'cover' }),
      srcset: imageSrcSet(project.cover, [420, 640, 720, 900], { q: 66, fit: 'cover' }),
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
