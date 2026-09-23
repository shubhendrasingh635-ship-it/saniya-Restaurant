import type { SEOConfig } from '@/types';
import { restaurant } from './restaurant';

// ============================================================
// SEO — centralized metadata, derived from restaurant config.
// ============================================================

export const seo: SEOConfig = {
  title: `${restaurant.name} — ${restaurant.tagline}`,
  description: restaurant.description,
  keywords: [
    restaurant.name,
    restaurant.cuisine,
    `restaurant ${restaurant.contact.city}`,
    `fine dining ${restaurant.contact.city}`,
    'reservations',
    'gourmet food',
    restaurant.restaurantType,
  ],
  canonicalUrl: restaurant.canonicalUrl,
  ogImage: restaurant.heroImage,
  restaurantName: restaurant.name,
  cuisine: restaurant.cuisine,
  city: restaurant.contact.city,
};

export function applySEO(): void {
  document.title = seo.title;
  const setMeta = (name: string, content: string, attr: 'name' | 'property' = 'name') => {
    let el = document.querySelector(`meta[${attr}="${name}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attr, name);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  setMeta('description', seo.description);
  setMeta('keywords', seo.keywords.join(', '));

  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', seo.canonicalUrl);
  setMeta('og:title', seo.title, 'property');
  setMeta('og:description', seo.description, 'property');
  setMeta('og:image', seo.ogImage, 'property');
  setMeta('og:type', 'website', 'property');
  setMeta('twitter:card', 'summary_large_image');
  setMeta('twitter:title', seo.title);
  setMeta('twitter:image', seo.ogImage);
}
