import type { FeatureFlags } from '@/types';

// ============================================================
// Feature Flags — toggle sections, CTAs, and nav items.
// Disabled features are fully hidden (no empty spaces).
// ============================================================

export const features: FeatureFlags = {
  reservations: true,
  onlineOrdering: true,
  delivery: true,
  takeaway: true,
  gallery: true,
  reviews: true,
  chefSection: true,
  events: true,
  specialOffers: true,
  instagram: true,
  whatsapp: true,
  googleMaps: true,
  newsletter: true,
};
