import type {
  ImageAsset,
  Review,
  SpecialOffer,
  RestaurantEvent,
  ChefInfo,
  AboutInfo,
  GalleryContent,
  SectionConfig,
} from '@/types';

// ============================================================
// Gallery Images — centralized image assets.
// Replace src URLs with client photos; components update automatically.
// ============================================================

export const gallery: GalleryContent = {
  eyebrow: 'A Visual Journey',
  title: 'Gallery',
  subtitle: 'A glimpse into Saniya — from candlelit tables to beautifully plated moments.',
};

export const galleryImages: ImageAsset[] = [
  {
    id: 'g-1',
    src: 'https://images.pexels.com/photos/16935896/pexels-photo-16935896.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&fit=crop',
    alt: 'Lounge table with floral centerpiece and candlelight',
    title: 'Evening Welcome',
    category: 'ambience',
    displayOrder: 1,
  },
  {
    id: 'g-2',
    src: 'https://images.pexels.com/photos/16120137/pexels-photo-16120137.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&fit=crop',
    alt: 'Candlelit dining table with lilies and roses',
    title: 'Candlelit Dining',
    category: 'interior',
    displayOrder: 2,
  },
  {
    id: 'g-3',
    src: 'https://images.pexels.com/photos/10615283/pexels-photo-10615283.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&fit=crop',
    alt: 'Butter chicken served with naan and cilantro',
    title: 'Butter Chicken',
    category: 'food',
    displayOrder: 3,
  },
  {
    id: 'g-4',
    src: 'https://images.pexels.com/photos/36701437/pexels-photo-36701437.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&fit=crop',
    alt: 'Gourmet tandoori chicken with edible flowers',
    title: 'From the Tandoor',
    category: 'food',
    displayOrder: 4,
  },
  {
    id: 'g-5',
    src: 'https://images.pexels.com/photos/16935958/pexels-photo-16935958.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&fit=crop',
    alt: 'Candlelit banquet table with floral arrangements',
    title: 'Celebration Table',
    category: 'interior',
    displayOrder: 5,
  },
  {
    id: 'g-6',
    src: 'https://images.pexels.com/photos/28674530/pexels-photo-28674530.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&fit=crop',
    alt: 'Indo-Chinese Manchurian with fresh herbs',
    title: 'Indo-Chinese Favourites',
    category: 'food',
    displayOrder: 6,
  },
  {
    id: 'g-7',
    src: 'https://images.pexels.com/photos/5410401/pexels-photo-5410401.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&fit=crop',
    alt: 'Fragrant biryani garnished with cashews and herbs',
    title: 'Dum Biryani',
    category: 'food',
    displayOrder: 7,
  },
  {
    id: 'g-8',
    src: 'https://images.pexels.com/photos/16935968/pexels-photo-16935968.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&fit=crop',
    alt: 'Elegant table setting with floral centerpiece and candles',
    title: 'Intimate Evenings',
    category: 'ambience',
    displayOrder: 8,
  },
  {
    id: 'g-9',
    src: 'https://images.pexels.com/photos/11887844/pexels-photo-11887844.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&fit=crop',
    alt: 'Gulab jamun dessert on a white plate',
    title: 'Sweet Endings',
    category: 'food',
    displayOrder: 9,
  },
  {
    id: 'g-10',
    src: 'https://images.pexels.com/photos/6715103/pexels-photo-6715103.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&fit=crop',
    alt: 'Dimly lit dining room with candles and warm lighting',
    title: 'Warm Ambience',
    category: 'interior',
    displayOrder: 10,
  },
  {
    id: 'g-11',
    src: 'https://images.pexels.com/photos/14509267/pexels-photo-14509267.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&fit=crop',
    alt: 'Mango lassi garnished with diced mango',
    title: 'Cooling Sips',
    category: 'drinks',
    displayOrder: 11,
  },
  {
    id: 'g-12',
    src: 'https://images.pexels.com/photos/28674556/pexels-photo-28674556.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&fit=crop',
    alt: 'Traditional Indian breads in a basket',
    title: 'Fresh Breads',
    category: 'food',
    displayOrder: 12,
  },
];

// ============================================================
// Reviews — sample demo testimonials for the template.
// Replace with real guest reviews when available.
// ============================================================

export const reviews: Review[] = [
  {
    id: 'r-1',
    customerName: 'Aakash (Sample Guest)',
    rating: 5,
    review:
      'The butter chicken is the best in Bokaro. Warm ambience, attentive staff, and a genuinely special evening. Saniya has become our go-to for family dinners.',
    date: '2026-08-20',
  },
  {
    id: 'r-2',
    customerName: 'Priya (Sample Guest)',
    rating: 5,
    review:
      'Loved the Indo-Chinese selection — the chilli chicken and Hakka noodles were full of flavour. The candlelit setting made it feel really intimate.',
    date: '2026-07-15',
  },
  {
    id: 'r-3',
    customerName: 'Rohit (Sample Guest)',
    rating: 4,
    review:
      'Beautiful interior and great food. The Saniya Special Thali is incredible value for the variety you get. Slightly busy on weekends but worth the wait.',
    date: '2026-07-02',
  },
  {
    id: 'r-4',
    customerName: 'Neha (Sample Guest)',
    rating: 5,
    review:
      'Celebrated my birthday here and the staff went above and beyond. The rose petal kheer is still on my mind. A truly warm and memorable experience.',
    date: '2026-06-18',
  },
  {
    id: 'r-5',
    customerName: 'Vikram (Sample Guest)',
    rating: 5,
    review:
      'Consistently excellent across visits. The biryani is aromatic and perfectly spiced, and the tandoori platter is a must-try. Easily the best dining in Bokaro.',
    date: '2026-05-29',
  },
  {
    id: 'r-6',
    customerName: 'Ananya (Sample Guest)',
    rating: 4,
    review:
      'Lovely atmosphere and beautifully plated dishes. The masala chai at the end was a thoughtful touch. Would love to see more vegan options added.',
    date: '2026-05-10',
  },
];

// ============================================================
// Special Offers — optional section, toggled by feature flag.
// ============================================================

export const specialOffers: SpecialOffer[] = [
  {
    id: 'so-1',
    title: 'Weekend Family Feast',
    description:
      'A shared platter for four featuring butter chicken, paneer, biryani, breads, and dessert. Available Saturday and Sunday.',
    image:
      'https://images.pexels.com/photos/20446397/pexels-photo-20446397.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    price: '₹1,499 for four',
    validity: 'Every Saturday & Sunday',
    enabled: true,
  },
  {
    id: 'so-2',
    title: 'Indo-Chinese Combo',
    description:
      'Chilli chicken, veg Hakka noodles, and a fresh lime soda — a quick, flavourful combo for lunch or dinner.',
    image:
      'https://images.pexels.com/photos/36388450/pexels-photo-36388450.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    price: '₹399 per person',
    validity: 'Available daily',
    enabled: true,
  },
  {
    id: 'so-3',
    title: 'Seasonal Sweet Plate',
    description:
      'A curated trio of gulab jamun, rasmalai, and gajar halwa with a complimentary masala chai.',
    image:
      'https://images.pexels.com/photos/8887011/pexels-photo-8887011.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    price: '₹199 per person',
    validity: 'Available through the season',
    enabled: true,
  },
];

// ============================================================
// Events — optional section, toggled by feature flag.
// ============================================================

export const events: RestaurantEvent[] = [
  {
    id: 'ev-1',
    title: 'Signature Saniya Evening',
    description:
      'A guided multi-course tasting of our signature dishes, paired with complementary beverages. Limited seating for an intimate experience.',
    image:
      'https://images.pexels.com/photos/16935958/pexels-photo-16935958.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    date: 'First Saturday of each month',
    time: '8:00 PM',
    bookingUrl: '#reservation',
    enabled: true,
  },
  {
    id: 'ev-2',
    title: 'Weekend Dinner Live Music',
    description:
      'Enjoy soft live acoustic music while you dine. No cover charge — first come, first seated.',
    image:
      'https://images.pexels.com/photos/16120137/pexels-photo-16120137.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    date: 'Every Friday & Saturday',
    time: '8:30 PM',
    enabled: true,
  },
  {
    id: 'ev-3',
    title: 'Chef\'s Table Experience',
    description:
      'Sit at the kitchen pass and watch our chef prepare a bespoke menu right before your eyes. Includes conversation and a personalized dessert.',
    image:
      'https://images.pexels.com/photos/24433378/pexels-photo-24433378.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    date: 'By appointment',
    time: '7:00 PM or 9:00 PM',
    bookingUrl: '#reservation',
    enabled: true,
  },
];

// ============================================================
// Chef Info — optional section, toggled by feature flag.
// ============================================================

export const chefInfo: ChefInfo = {
  name: 'Chef Rakhi Mehta',
  title: 'Head Chef & Curator',
  bio: 'Chef Rakhi grew up in a household where the kitchen was the heart of every celebration. Over the years she developed a quiet obsession with two worlds — the spice-laden traditions of Indian home cooking and the precise, wok-fired craft of Chinese cuisine. At Saniya, she brings them together on one menu, treating each plate as a small gesture of warmth. Her philosophy is simple: cook the way you would for someone you care about, and the food will speak for itself.',
  image:
    'https://images.pexels.com/photos/16816198/pexels-photo-16816198.jpeg?auto=compress&cs=tinysrgb&w=800&h=900&fit=crop',
  signatureDish: 'Saniya Special Thali',
  awards: [
    'Featured in Bokaro Food & Culture Guide (Demo)',
    'Guest chef at regional culinary showcase (Demo)',
    'Recognized for Indo-Chinese fusion menu (Demo)',
  ],
};

// ============================================================
// About Info — restaurant story, philosophy, and stats.
// ============================================================

export const aboutInfo: AboutInfo = {
  story:
    'Saniya began with a simple belief — that a meal shared with care can feel like home, even when you are far from one. In the heart of Bokaro, we built a dining room that feels warm rather than formal, where the aromas of Indian spices and the gentle sizzle of a Chinese wok meet under soft candlelight. Some stories begin with a coincidence. Ours began with the same date — a quiet reminder that the best things are meant to be shared.',
  philosophy:
    'We cook the way we would for the people closest to us. Every dish at Saniya is prepared with patience and attention — from the slow-simmered gravies to the breads fresh from the tandoor. We believe good food is not just about technique; it is about warmth, honesty, and the quiet care that turns a meal into a memory.',
  history:
    'Since opening our doors, Saniya has grown from a small dining room into one of Bokaro\'s most loved culinary destinations. Along the way we have stayed true to the idea that started it all — that every guest who walks in should leave feeling like they have been somewhere that genuinely cared. 11 · 05 is woven quietly into our story, a small detail that reminds us why we began.',
  establishedYear: 2019,
  awards: [
    'Loved by Bokaro Diners — Local Food Guide (Demo)',
    'Best Indo-Chinese Menu — Regional Spotlight (Demo)',
    'Top Rated Family Dining in Bokaro (Demo)',
    'Featured Signature Thali — Food & Culture Magazine (Demo)',
  ],
  stats: [
    { label: 'Years of Warmth', value: '5+' },
    { label: 'Menu Creations', value: '60+' },
    { label: 'Guests Served', value: '50K+' },
    { label: 'Signature Dishes', value: '12' },
  ],
  images: [
    'https://images.pexels.com/photos/16935896/pexels-photo-16935896.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    'https://images.pexels.com/photos/24433378/pexels-photo-24433378.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  ],
};

// ============================================================
// Section ordering — controls the layout of the home page.
// Reorder or disable sections here without touching components.
// ============================================================

export const sectionOrder: SectionConfig[] = [
  { id: 'hero', enabled: true },
  { id: 'featured', enabled: true },
  { id: 'intro', enabled: true },
  { id: 'about', enabled: true },
  { id: 'offers', enabled: true },
  { id: 'gallery', enabled: true },
  { id: 'chef', enabled: true },
  { id: 'reviews', enabled: true },
  { id: 'events', enabled: true },
  { id: 'menu', enabled: true },
  { id: 'reservationCta', enabled: true },
  { id: 'location', enabled: true },
  { id: 'contact', enabled: true },
];
