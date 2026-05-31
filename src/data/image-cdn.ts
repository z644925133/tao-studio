type ImageFit = 'contain' | 'cover' | 'fill';

type ImageOptions = {
  w?: number;
  h?: number;
  q?: number;
  fit?: ImageFit;
};

const provider = import.meta.env.PUBLIC_IMAGE_PROVIDER ?? 'local';
const remoteBase = (import.meta.env.PUBLIC_IMAGE_BASE_URL ?? '').replace(/\/$/, '');

const sourceUrl = (src: string) => {
  if (/^https?:\/\//.test(src)) return src;
  if (remoteBase) return `${remoteBase}${src.startsWith('/') ? src : `/${src}`}`;
  return src;
};

export const imageUrl = (src: string, options: ImageOptions = {}) => {
  const source = sourceUrl(src);
  const { w, h, q = 72, fit = 'contain' } = options;

  if (provider === 'netlify') {
    const params = new URLSearchParams({ url: source, fm: 'webp', q: String(q) });
    if (w) params.set('w', String(w));
    if (h) params.set('h', String(h));
    if (fit !== 'contain' && w && h) params.set('fit', fit);
    return `/.netlify/images?${params.toString()}`;
  }

  if (provider === 'cloudflare' && remoteBase) {
    const transforms = [
      w ? `width=${w}` : '',
      h ? `height=${h}` : '',
      fit !== 'contain' && w && h ? `fit=${fit}` : '',
      `quality=${q}`,
      'format=auto'
    ].filter(Boolean).join(',');
    const path = src.startsWith('/') ? src : `/${src}`;
    return `${remoteBase}/cdn-cgi/image/${transforms}${path}`;
  }

  if (provider === 'imagekit' && remoteBase) {
    const transforms = [
      w ? `w-${w}` : '',
      h ? `h-${h}` : '',
      fit === 'cover' ? 'c-at_max' : '',
      `q-${q}`,
      'f-webp'
    ].filter(Boolean).join(',');
    const path = src.startsWith('/') ? src : `/${src}`;
    return `${remoteBase}/tr:${transforms}${path}`;
  }

  return source;
};

export const imageSrcSet = (src: string, widths: number[], options: Omit<ImageOptions, 'w'> = {}) => {
  if (provider === 'local') return undefined;
  return widths
    .map((w) => `${imageUrl(src, { ...options, w })} ${w}w`)
    .join(', ');
};
