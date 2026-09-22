import type { NavItem } from '@/types';
import { features } from './features';

// ============================================================
// Navigation — items are filtered by feature flags at runtime.
// Add or reorder items here; the Navbar renders from this array.
// ============================================================

export const navigationItems: NavItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'menu', label: 'Menu', href: '#menu' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'gallery', label: 'Gallery', href: '#gallery', featureFlag: 'gallery' },
  { id: 'chef', label: 'Chef', href: '#chef', featureFlag: 'chefSection' },
  { id: 'events', label: 'Events', href: '#events', featureFlag: 'events' },
  { id: 'offers', label: 'Offers', href: '#offers', featureFlag: 'specialOffers' },
  { id: 'reviews', label: 'Reviews', href: '#reviews', featureFlag: 'reviews' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export function getVisibleNavItems(): NavItem[] {
  return navigationItems.filter((item) => {
    if (!item.featureFlag) return true;
    return features[item.featureFlag];
  });
}
