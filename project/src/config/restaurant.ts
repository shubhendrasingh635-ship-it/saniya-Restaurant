import type { RestaurantConfig } from '@/types';

// ============================================================
// Restaurant Configuration — the single source of restaurant identity.
// Change these values to rebrand the entire website.
// ============================================================

export const restaurant: RestaurantConfig = {
  theme: {
    preset: 'luxury',
  },
  canonicalUrl: 'https://saniya.example.com',
  name: 'Saniya',
  legalName: 'Saniya Hospitality',
  tagline: 'A Place Where Every Meal Feels Like Home',
  description:
    'An elegant dining destination in Bokaro where warm Indian flavours, beloved Chinese classics, and signature Saniya creations come together. Thoughtfully sourced, gently spiced, and served with quiet care.',
  logo: '',
  logoText: 'S',
  favicon: '/vite.svg',
  restaurantType: 'Premium Restaurant',
  cuisine: 'Indian • Chinese • Signature Dishes',
  establishedYear: 2024,
  heroImage:
    'https://images.pexels.com/photos/16935896/pexels-photo-16935896.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
  heroOverlay: 'linear-gradient(180deg, rgba(12,8,10,0.55) 0%, rgba(12,8,10,0.78) 100%)',

  contact: {
    phone: '+91 8292442780',
    email: 'hello@saniya.example.com',
    whatsapp: '+918292442780',
    address: 'City Centre, Sector 4',
    city: 'Bokaro',
    state: 'Jharkhand',
    postalCode: '827004',
    country: 'India',
  },

  location: {
    latitude: 23.6405,
    longitude: 86.1880,
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=23.6405,86.1880',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=23.6405,86.1880',
    embedMapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29170.0494!2d86.1880!3d23.6405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDM4JzI1LjgiTiA4NsKwMTEnMTYuOCJF!5e0!3m2!1sen!2sin!4v1700000000000',
  },

  social: {
    instagram: 'https://instagram.com/saniya.dining',
    facebook: 'https://facebook.com/saniya.dining',
    youtube: 'https://youtube.com/@saniya-dining',
    x: 'https://x.com/saniya_dining',
  },

  hours: {
    monday: '12:00 PM – 10:30 PM',
    tuesday: '12:00 PM – 10:30 PM',
    wednesday: '12:00 PM – 10:30 PM',
    thursday: '12:00 PM – 10:30 PM',
    friday: '12:00 PM – 11:00 PM',
    saturday: '11:00 AM – 11:00 PM',
    sunday: '11:00 AM – 10:00 PM',
  },

  reservation: {
    enabled: true,
    phoneBooking: '+91 8292442780',
    minimumGuests: 1,
    maximumGuests: 12,
  },

  ordering: {
    enabled: true,
    orderingUrl: 'https://order.saniya.example.com',
    deliveryAvailable: true,
    takeawayAvailable: true,
  },
};
