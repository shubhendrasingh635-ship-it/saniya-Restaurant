import type { MenuCategory, MenuItem } from '@/types';

// ============================================================
// Menu Data — categories and items rendered automatically.
// Add/remove items here; the Menu UI updates without code changes.
// ============================================================

export const menuCategories: MenuCategory[] = [
  {
    id: 'starters',
    name: 'Starters',
    description: 'Small plates to begin your evening',
    displayOrder: 1,
  },
  {
    id: 'indian-classics',
    name: 'Indian Classics',
    description: 'Time-honoured recipes from across India',
    displayOrder: 2,
  },
  {
    id: 'chinese-favourites',
    name: 'Chinese Favourites',
    description: 'Wok-fired classics and Indo-Chinese specialities',
    displayOrder: 3,
  },
  {
    id: 'signature',
    name: 'Signature Saniya Dishes',
    description: 'Creations unique to our kitchen',
    displayOrder: 4,
  },
  {
    id: 'mains',
    name: 'Main Course',
    description: 'Hearty plates for the centrepiece of your meal',
    displayOrder: 5,
  },
  {
    id: 'rice-noodles',
    name: 'Rice & Noodles',
    description: 'Fragrant rice and wok-tossed noodles',
    displayOrder: 6,
  },
  {
    id: 'breads',
    name: 'Breads',
    description: 'Fresh from the tandoor',
    displayOrder: 7,
  },
  {
    id: 'desserts',
    name: 'Desserts',
    description: 'Sweet conclusions to your meal',
    displayOrder: 8,
  },
  {
    id: 'beverages',
    name: 'Beverages',
    description: 'Cooling drinks and warm brews',
    displayOrder: 9,
  },
];

export const menuItems: MenuItem[] = [
  // ---- Starters ----
  {
    id: 'st-1',
    categoryId: 'starters',
    name: 'Paneer Tikka',
    description:
      'Cubes of cottage cheese marinated in spiced yogurt and char-grilled in the tandoor, served with mint chutney.',
    price: 220,
    currency: '₹',
    image:
      'https://images.pexels.com/photos/30604608/pexels-photo-30604608.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    imageAlt: 'Grilled paneer tikka appetizer on a white plate',
    vegetarian: true,
    bestseller: true,
    available: true,
    allergens: ['Dairy'],
    preparationTime: '15 min',
  },
  {
    id: 'st-2',
    categoryId: 'starters',
    name: 'Chicken 65',
    description:
      'Deep-fried chicken bites tossed in curry leaves, green chillies, and a tangy spiced marinade.',
    price: 260,
    currency: '₹',
    image:
      'https://images.pexels.com/photos/6705486/pexels-photo-6705486.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    imageAlt: 'Spicy chicken 65 with garnish',
    spicy: true,
    recommended: true,
    available: true,
    allergens: ['Gluten'],
    preparationTime: '15 min',
  },
  {
    id: 'st-3',
    categoryId: 'starters',
    name: 'Veg Manchurian Dry',
    description:
      'Crispy vegetable dumplings tossed in a savoury Indo-Chinese Manchurian sauce with spring onions.',
    price: 190,
    currency: '₹',
    image:
      'https://images.pexels.com/photos/28674530/pexels-photo-28674530.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    imageAlt: 'Indo-Chinese vegetable Manchurian on a white plate',
    vegetarian: true,
    available: true,
    allergens: ['Soy', 'Gluten'],
    preparationTime: '12 min',
  },
  {
    id: 'st-4',
    categoryId: 'starters',
    name: 'Tandoori Mushroom',
    description:
      'Button mushrooms marinated in aromatic spices and char-grilled, finished with a squeeze of lime.',
    price: 210,
    currency: '₹',
    image:
      'https://images.pexels.com/photos/29173093/pexels-photo-29173093.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    imageAlt: 'Grilled paneer rolls with vegetables on a wooden platter',
    vegetarian: true,
    available: true,
    allergens: ['Dairy'],
    preparationTime: '14 min',
  },

  // ---- Indian Classics ----
  {
    id: 'ic-1',
    categoryId: 'indian-classics',
    name: 'Butter Chicken',
    description:
      'Tandoor-roasted chicken simmered in a silky tomato, butter, and cashew gravy with a hint of fenugreek.',
    price: 340,
    currency: '₹',
    image:
      'https://images.pexels.com/photos/10615283/pexels-photo-10615283.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    imageAlt: 'Butter chicken with naan and cilantro garnish',
    bestseller: true,
    recommended: true,
    available: true,
    allergens: ['Dairy', 'Nuts'],
    preparationTime: '22 min',
  },
  {
    id: 'ic-2',
    categoryId: 'indian-classics',
    name: 'Paneer Butter Masala',
    description:
      'Cottage cheese in a velvety tomato and cream gravy, delicately spiced and finished with fresh coriander.',
    price: 300,
    currency: '₹',
    image:
      'https://images.pexels.com/photos/11188417/pexels-photo-11188417.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    imageAlt: 'Paneer butter masala garnished with herbs',
    vegetarian: true,
    bestseller: true,
    available: true,
    allergens: ['Dairy', 'Nuts'],
    preparationTime: '20 min',
  },
  {
    id: 'ic-3',
    categoryId: 'indian-classics',
    name: 'Dal Makhani',
    description:
      'Black lentils slow-cooked overnight with tomatoes, butter, and cream for a rich, comforting classic.',
    price: 240,
    currency: '₹',
    image:
      'https://images.pexels.com/photos/17050759/pexels-photo-17050759.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    imageAlt: 'Indian dishes on white plates with vibrant colours',
    vegetarian: true,
    available: true,
    allergens: ['Dairy'],
    preparationTime: '18 min',
  },
  {
    id: 'ic-4',
    categoryId: 'indian-classics',
    name: 'Rogan Josh',
    description:
      'Tender lamb braised in Kashmiri chillies, yoghurt, and whole spices until deeply aromatic.',
    price: 380,
    currency: '₹',
    image:
      'https://images.pexels.com/photos/20408442/pexels-photo-20408442.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    imageAlt: 'Rich Indian lamb curry with spices on dark background',
    available: true,
    allergens: ['Dairy'],
    preparationTime: '28 min',
  },

  // ---- Chinese Favourites ----
  {
    id: 'cf-1',
    categoryId: 'chinese-favourites',
    name: 'Chilli Chicken',
    description:
      'Crispy chicken tossed with bell peppers, onions, and garlic in a spicy-sweet chilli sauce.',
    price: 320,
    currency: '₹',
    image:
      'https://images.pexels.com/photos/36388450/pexels-photo-36388450.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    imageAlt: 'Asian fusion meal with noodles, rice, and chicken',
    spicy: true,
    bestseller: true,
    available: true,
    allergens: ['Soy', 'Gluten'],
    preparationTime: '18 min',
  },
  {
    id: 'cf-2',
    categoryId: 'chinese-favourites',
    name: 'Veg Hakka Noodles',
    description:
      'Wok-tossed noodles with cabbage, carrots, beans, and scallions in a light soy-garlic sauce.',
    price: 220,
    currency: '₹',
    image:
      'https://images.pexels.com/photos/39359500/pexels-photo-39359500.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    imageAlt: 'Stir-fried Hakka noodles with vegetables in a red bowl',
    vegetarian: true,
    available: true,
    allergens: ['Soy', 'Gluten'],
    preparationTime: '14 min',
  },
  {
    id: 'cf-3',
    categoryId: 'chinese-favourites',
    name: 'Szechwan Vegetables',
    description:
      'Seasonal vegetables stir-fried in a bold, numbing Szechwan pepper sauce with garlic and chilli.',
    price: 250,
    currency: '₹',
    image:
      'https://images.pexels.com/photos/37743276/pexels-photo-37743276.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    imageAlt: 'Chinese stir fry with vegetables and chopsticks',
    vegetarian: true,
    spicy: true,
    available: true,
    allergens: ['Soy'],
    preparationTime: '14 min',
  },
  {
    id: 'cf-4',
    categoryId: 'chinese-favourites',
    name: 'Chicken Fried Rice',
    description:
      'Wok-fried rice with shredded chicken, eggs, spring onions, and a touch of soy.',
    price: 260,
    currency: '₹',
    image:
      'https://images.pexels.com/photos/6705486/pexels-photo-6705486.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    imageAlt: 'Szechwan chicken with yellow fried rice',
    available: true,
    allergens: ['Soy', 'Egg', 'Gluten'],
    preparationTime: '15 min',
  },

  // ---- Signature Saniya Dishes ----
  {
    id: 'sg-1',
    categoryId: 'signature',
    name: 'Saniya Special Thali',
    description:
      'A curated platter of butter chicken, paneer, dal, biryani, bread, and dessert — a complete Saniya experience on one plate.',
    price: 520,
    currency: '₹',
    image:
      'https://images.pexels.com/photos/20446397/pexels-photo-20446397.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    imageAlt: 'Indian meal with butter chicken, naan, rice, and spices',
    bestseller: true,
    recommended: true,
    available: true,
    allergens: ['Dairy', 'Nuts', 'Gluten'],
    preparationTime: '30 min',
  },
  {
    id: 'sg-2',
    categoryId: 'signature',
    name: 'Tandoori Prawn Skewers',
    description:
      'Prawns marinated in saffron-yogurt spice, char-grilled, and served with a roasted garlic dip.',
    price: 480,
    currency: '₹',
    image:
      'https://images.pexels.com/photos/36701471/pexels-photo-36701471.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    imageAlt: 'Grilled Indian kebab platter with garnishes',
    recommended: true,
    available: true,
    allergens: ['Dairy', 'Shellfish'],
    preparationTime: '22 min',
  },
  {
    id: 'sg-3',
    categoryId: 'signature',
    name: 'Rose Petal Kheer',
    description:
      'Slow-cooked rice pudding infused with cardamom, rose petals, and slivered almonds — our most-loved dessert.',
    price: 160,
    currency: '₹',
    image:
      'https://images.pexels.com/photos/8887011/pexels-photo-8887011.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    imageAlt: 'Traditional Indian sweets in ornate bowls',
    vegetarian: true,
    available: true,
    allergens: ['Dairy', 'Nuts'],
    preparationTime: '10 min',
  },

  // ---- Main Course ----
  {
    id: 'mc-1',
    categoryId: 'mains',
    name: 'Chicken Biryani',
    description:
      'Long-grain basmati layered with spiced chicken, saffron, and fried onions, sealed and dum-cooked.',
    price: 320,
    currency: '₹',
    image:
      'https://images.pexels.com/photos/5410401/pexels-photo-5410401.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    imageAlt: 'Indian biryani garnished with cashews and herbs',
    bestseller: true,
    available: true,
    allergens: ['Dairy', 'Nuts'],
    preparationTime: '28 min',
  },
  {
    id: 'mc-2',
    categoryId: 'mains',
    name: 'Mutton Biryani',
    description:
      'Tender mutton and fragrant basmati slow-cooked with whole spices, mint, and saffron.',
    price: 380,
    currency: '₹',
    image:
      'https://images.pexels.com/photos/5695615/pexels-photo-5695615.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    imageAlt: 'Lamb biryani on a white plate with lime',
    recommended: true,
    available: true,
    allergens: ['Dairy', 'Nuts'],
    preparationTime: '32 min',
  },
  {
    id: 'mc-3',
    categoryId: 'mains',
    name: 'Kadai Paneer',
    description:
      'Cottage cheese and peppers tossed in a freshly ground kadai masala with onions and tomatoes.',
    price: 290,
    currency: '₹',
    image:
      'https://images.pexels.com/photos/11188417/pexels-photo-11188417.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    imageAlt: 'Paneer curry garnished with fresh herbs',
    vegetarian: true,
    spicy: true,
    available: true,
    allergens: ['Dairy'],
    preparationTime: '18 min',
  },
  {
    id: 'mc-4',
    categoryId: 'mains',
    name: 'Fish Curry',
    description:
      'Fresh fish simmered in a tangy coconut and tamarind gravy with curry leaves and chilli.',
    price: 360,
    currency: '₹',
    image:
      'https://images.pexels.com/photos/20422195/pexels-photo-20422195.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    imageAlt: 'Grilled meal platter with colourful vegetables',
    available: true,
    allergens: ['Fish'],
    preparationTime: '24 min',
  },

  // ---- Rice & Noodles ----
  {
    id: 'rn-1',
    categoryId: 'rice-noodles',
    name: 'Veg Fried Rice',
    description:
      'Steamed rice wok-tossed with mixed vegetables, garlic, and soy sauce.',
    price: 180,
    currency: '₹',
    image:
      'https://images.pexels.com/photos/37488682/pexels-photo-37488682.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    imageAlt: 'Spicy Asian noodles with vegetables',
    vegetarian: true,
    available: true,
    allergens: ['Soy', 'Gluten'],
    preparationTime: '12 min',
  },
  {
    id: 'rn-2',
    categoryId: 'rice-noodles',
    name: 'Chicken Hakka Noodles',
    description:
      'Wok-tossed noodles with shredded chicken, vegetables, and a garlic-soy glaze.',
    price: 240,
    currency: '₹',
    image:
      'https://images.pexels.com/photos/6646166/pexels-photo-6646166.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    imageAlt: 'Asian noodles with fried tofu and sauces',
    available: true,
    allergens: ['Soy', 'Gluten', 'Egg'],
    preparationTime: '14 min',
  },
  {
    id: 'rn-3',
    categoryId: 'rice-noodles',
    name: 'Steamed Rice',
    description:
      'Fluffy long-grain basmati, steamed to order — the perfect companion to any curry.',
    price: 90,
    currency: '₹',
    image:
      'https://images.pexels.com/photos/30676160/pexels-photo-30676160.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    imageAlt: 'Steamed rice in a decorative bowl',
    vegetarian: true,
    vegan: true,
    available: true,
    allergens: [],
    preparationTime: '10 min',
  },

  // ---- Breads ----
  {
    id: 'br-1',
    categoryId: 'breads',
    name: 'Butter Naan',
    description:
      'Soft tandoor-baked leavened bread brushed with butter.',
    price: 50,
    currency: '₹',
    image:
      'https://images.pexels.com/photos/28674556/pexels-photo-28674556.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    imageAlt: 'Traditional Indian breads in a wicker basket',
    vegetarian: true,
    bestseller: true,
    available: true,
    allergens: ['Dairy', 'Gluten'],
    preparationTime: '8 min',
  },
  {
    id: 'br-2',
    categoryId: 'breads',
    name: 'Garlic Naan',
    description:
      'Naan topped with garlic, coriander, and a drizzle of butter.',
    price: 60,
    currency: '₹',
    image:
      'https://images.pexels.com/photos/1117862/pexels-photo-1117862.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    imageAlt: 'Indian flatbreads in a basket',
    vegetarian: true,
    available: true,
    allergens: ['Dairy', 'Gluten'],
    preparationTime: '8 min',
  },
  {
    id: 'br-3',
    categoryId: 'breads',
    name: 'Tandoori Roti',
    description:
      'Whole-wheat flatbread baked in the tandoor.',
    price: 40,
    currency: '₹',
    image:
      'https://images.pexels.com/photos/28125427/pexels-photo-28125427.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    imageAlt: 'Indian cuisine with naan and curry',
    vegetarian: true,
    vegan: true,
    available: true,
    allergens: ['Gluten'],
    preparationTime: '6 min',
  },

  // ---- Desserts ----
  {
    id: 'ds-1',
    categoryId: 'desserts',
    name: 'Gulab Jamun',
    description:
      'Warm milk-solid dumplings soaked in rose-cardamom syrup, served with a scoop of vanilla ice cream.',
    price: 120,
    currency: '₹',
    image:
      'https://images.pexels.com/photos/11887844/pexels-photo-11887844.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    imageAlt: 'Gulab jamun on a white plate',
    vegetarian: true,
    bestseller: true,
    available: true,
    allergens: ['Dairy', 'Gluten'],
    preparationTime: '8 min',
  },
  {
    id: 'ds-2',
    categoryId: 'desserts',
    name: 'Assorted Indian Sweets',
    description:
      'A curated trio of gulab jamun, rasmalai, and gajar halwa on a single plate.',
    price: 160,
    currency: '₹',
    image:
      'https://images.pexels.com/photos/8887011/pexels-photo-8887011.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    imageAlt: 'Traditional Indian sweets in ornate bowls',
    vegetarian: true,
    available: true,
    allergens: ['Dairy', 'Nuts'],
    preparationTime: '8 min',
  },
  {
    id: 'ds-3',
    categoryId: 'desserts',
    name: 'Date & Toffee Pudding',
    description:
      'Warm sticky date pudding with caramel toffee sauce and a dusting of pistachio.',
    price: 140,
    currency: '₹',
    image:
      'https://images.pexels.com/photos/37294501/pexels-photo-37294501.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    imageAlt: 'Sweet dessert served in a white bowl',
    vegetarian: true,
    recommended: true,
    available: true,
    allergens: ['Dairy', 'Egg', 'Gluten', 'Nuts'],
    preparationTime: '12 min',
  },

  // ---- Beverages ----
  {
    id: 'bv-1',
    categoryId: 'beverages',
    name: 'Mango Lassi',
    description:
      'Thick yogurt blended with sweet Alphonso mango and a pinch of cardamom.',
    price: 90,
    currency: '₹',
    image:
      'https://images.pexels.com/photos/14509267/pexels-photo-14509267.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    imageAlt: 'Two glasses of creamy mango lassi',
    vegetarian: true,
    bestseller: true,
    available: true,
    allergens: ['Dairy'],
    preparationTime: '5 min',
  },
  {
    id: 'bv-2',
    categoryId: 'beverages',
    name: 'Masala Chai',
    description:
      'Black tea brewed with milk, ginger, cardamom, and whole spices.',
    price: 50,
    currency: '₹',
    image:
      'https://images.pexels.com/photos/12865880/pexels-photo-12865880.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    imageAlt: 'Masala chai in brass glasses on a rustic table',
    vegetarian: true,
    available: true,
    allergens: ['Dairy'],
    preparationTime: '6 min',
  },
  {
    id: 'bv-3',
    categoryId: 'beverages',
    name: 'Fresh Lime Soda',
    description:
      'Refreshing lime soda — sweet, salted, or mixed, served chilled.',
    price: 60,
    currency: '₹',
    image:
      'https://images.pexels.com/photos/17200460/pexels-photo-17200460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    imageAlt: 'Refreshing drink with mint and cherry',
    vegetarian: true,
    vegan: true,
    available: true,
    allergens: [],
    preparationTime: '4 min',
  },
  {
    id: 'bv-4',
    categoryId: 'beverages',
    name: 'Rose Falooda',
    description:
      'Chilled rose-flavoured milk with vermicelli, basil seeds, and a scoop of kulfi.',
    price: 110,
    currency: '₹',
    image:
      'https://images.pexels.com/photos/8887065/pexels-photo-8887065.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    imageAlt: 'Indian sweet preparation with vibrant colours',
    vegetarian: true,
    recommended: true,
    available: true,
    allergens: ['Dairy', 'Nuts'],
    preparationTime: '8 min',
  },
];
