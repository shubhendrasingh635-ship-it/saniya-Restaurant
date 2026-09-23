// ============================================================
// Core type definitions for the Master Restaurant Platform
// ============================================================

// ---- Theme ----
export type ThemePreset =
  | 'luxury'
  | 'modern'
  | 'minimal'
  | 'cafe'
  | 'traditional'
  | 'premium-dark'
  | 'casual';

export interface ThemeConfig {
  preset: ThemePreset;
  colors: {
    primary: string;
    primaryDark: string;
    primaryLight: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    surfaceAlt: string;
    text: string;
    textMuted: string;
    heading: string;
    border: string;
    success: string;
    warning: string;
    error: string;
  };
  fonts: {
    heading: string;
    body: string;
  };
  radius: {
    sm: string;
    md: string;
    lg: string;
    full: string;
  };
  buttonStyle: 'solid' | 'outline' | 'ghost';
}

// ---- Restaurant Info ----
export interface SocialLinks {
  instagram?: string;
  facebook?: string;
  youtube?: string;
  x?: string;
  linkedin?: string;
}

export interface OpeningHours {
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
}

export interface ReservationConfig {
  enabled: boolean;
  bookingUrl?: string;
  phoneBooking?: string;
  minimumGuests: number;
  maximumGuests: number;
}

export interface OrderingConfig {
  enabled: boolean;
  orderingUrl?: string;
  deliveryAvailable: boolean;
  takeawayAvailable: boolean;
}

export interface RestaurantConfig {
  theme: {
    preset: ThemePreset;
  };
  canonicalUrl: string;
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  logo: string;
  logoText: string;
  favicon: string;
  restaurantType: string;
  cuisine: string;
  establishedYear: number;
  heroImage: string;
  heroOverlay: string;
  contact: {
    phone: string;
    email: string;
    whatsapp?: string;
    address: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  location: {
    latitude: number;
    longitude: number;
    googleMapsUrl: string;
    directionsUrl: string;
    embedMapUrl?: string;
  };
  social: SocialLinks;
  hours: OpeningHours;
  reservation: ReservationConfig;
  ordering: OrderingConfig;
}

// ---- Features ----
export interface FeatureFlags {
  reservations: boolean;
  onlineOrdering: boolean;
  delivery: boolean;
  takeaway: boolean;
  gallery: boolean;
  reviews: boolean;
  chefSection: boolean;
  events: boolean;
  specialOffers: boolean;
  instagram: boolean;
  whatsapp: boolean;
  googleMaps: boolean;
  newsletter: boolean;
}

// ---- Navigation ----
export interface NavItem {
  id: string;
  label: string;
  href: string;
  featureFlag?: keyof FeatureFlags;
}

// ---- SEO ----
export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogImage: string;
  restaurantName: string;
  cuisine: string;
  city: string;
}

// ---- Menu ----
export interface MenuCategory {
  id: string;
  name: string;
  description?: string;
  displayOrder: number;
}

export interface MenuItem {
  id: string;
  categoryId: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  image: string;
  imageAlt?: string;
  vegetarian?: boolean;
  vegan?: boolean;
  spicy?: boolean;
  bestseller?: boolean;
  recommended?: boolean;
  available?: boolean;
  allergens?: string[];
  preparationTime?: string;
}

// ---- Images / Gallery ----
export type ImageCategory =
  | 'hero'
  | 'food'
  | 'menuItem'
  | 'interior'
  | 'exterior'
  | 'drinks'
  | 'chef'
  | 'staff'
  | 'events'
  | 'ambience'
  | 'about';

export interface ImageAsset {
  id: string;
  src: string;
  alt: string;
  title?: string;
  category: ImageCategory;
  displayOrder: number;
}

// ---- Reviews ----
export interface Review {
  id: string;
  customerName: string;
  rating: number;
  review: string;
  image?: string;
  date: string;
}

// ---- Special Offers ----
export interface SpecialOffer {
  id: string;
  title: string;
  description: string;
  image: string;
  price: string;
  validity: string;
  enabled: boolean;
}

// ---- Events ----
export interface RestaurantEvent {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  time?: string;
  bookingUrl?: string;
  enabled: boolean;
}

// ---- Chef ----
export interface ChefInfo {
  name: string;
  title: string;
  bio: string;
  image: string;
  signatureDish?: string;
  awards?: string[];
}

// ---- About ----
export interface AboutInfo {
  story: string;
  philosophy: string;
  history: string;
  establishedYear: number;
  awards: string[];
  stats: { label: string; value: string }[];
  images: string[];
}

// ---- Section composition ----
export type SectionId =
  | 'hero'
  | 'featured'
  | 'intro'
  | 'about'
  | 'offers'
  | 'gallery'
  | 'chef'
  | 'reviews'
  | 'events'
  | 'menu'
  | 'reservationCta'
  | 'location'
  | 'contact';

export interface GalleryContent {
  eyebrow: string;
  title: string;
  subtitle: string;
}

export interface SectionConfig {
  id: SectionId;
  enabled: boolean;
}
