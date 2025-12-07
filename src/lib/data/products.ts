// ============================================
// MOCK DATA - E-COMMERCE PRODUCTS
// Gifts and custom cakes for all occasions
// ============================================

export type OccasionType = 'birthday' | 'wedding' | 'anniversary' | 'corporate' | 'holiday' | 'graduation' | 'baby-shower' | 'other';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'gift' | 'cake';
  occasions: OccasionType[];
  imageUrl: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  featured?: boolean;
}

export interface CakeFlavor {
  id: string;
  name: string;
  description: string;
  basePrice: number;
}

export interface CakeSize {
  id: string;
  name: string;
  serves: string;
  priceMultiplier: number;
}

export interface CakeTheme {
  id: string;
  name: string;
  description: string;
  additionalCost: number;
  imageUrl: string;
}

// Featured Gift Products
export const featuredGifts: Product[] = [
  {
    id: 'gift-001',
    name: 'Luxury Chocolate Box Set',
    description: 'Handcrafted premium chocolates in an elegant gift box. Perfect for any celebration.',
    price: 65,
    category: 'gift',
    occasions: ['birthday', 'anniversary', 'corporate'],
    imageUrl: '/images/placeholder.svg',
    rating: 4.9,
    reviewCount: 342,
    inStock: true,
    featured: true,
  },
  {
    id: 'gift-002',
    name: 'Personalized Photo Frame',
    description: 'Custom engraved photo frame with your special message. Makes memories last forever.',
    price: 25,
    category: 'gift',
    occasions: ['birthday', 'wedding', 'anniversary', 'graduation'],
    imageUrl: '/images/placeholder.svg',
    rating: 4.7,
    reviewCount: 189,
    inStock: true,
    featured: true,
  },
  {
    id: 'gift-003',
    name: 'Premium Flower Arrangement',
    description: 'Fresh seasonal flowers arranged by expert florists. Delivered with care.',
    price: 55,
    category: 'gift',
    occasions: ['birthday', 'wedding', 'anniversary'],
    imageUrl: '/images/placeholder.svg',
    rating: 4.8,
    reviewCount: 567,
    inStock: true,
    featured: true,
  },
  {
    id: 'gift-004',
    name: 'Gourmet Gift Basket',
    description: 'Curated selection of artisanal foods, wines, and treats in a beautiful basket.',
    price: 85,
    category: 'gift',
    occasions: ['corporate', 'holiday', 'anniversary'],
    imageUrl: '/images/placeholder.svg',
    rating: 4.9,
    reviewCount: 423,
    inStock: true,
    featured: true,
  },
];

// Birthday Gifts
export const birthdayGifts: Product[] = [
  {
    id: 'gift-005',
    name: 'Birthday Celebration Bundle',
    description: 'Complete party package with balloons, banners, and party favors.',
    price: 29,
    category: 'gift',
    occasions: ['birthday'],
    imageUrl: '/images/placeholder.svg',
    rating: 4.6,
    reviewCount: 234,
    inStock: true,
  },
  {
    id: 'gift-006',
    name: 'Spa & Relaxation Gift Set',
    description: 'Luxurious spa products for the ultimate relaxation experience.',
    price: 48,
    category: 'gift',
    occasions: ['birthday', 'anniversary'],
    imageUrl: '/images/placeholder.svg',
    rating: 4.8,
    reviewCount: 312,
    inStock: true,
  },
];

// Wedding Gifts
export const weddingGifts: Product[] = [
  {
    id: 'gift-007',
    name: 'Crystal Champagne Flutes',
    description: 'Elegant crystal champagne glasses, perfect for toasting the happy couple.',
    price: 45,
    category: 'gift',
    occasions: ['wedding', 'anniversary'],
    imageUrl: '/images/placeholder.svg', // champagne-flutes.jpg',
    rating: 4.9,
    reviewCount: 178,
    inStock: true,
  },
  {
    id: 'gift-008',
    name: 'Wedding Memory Book',
    description: 'Beautiful leather-bound album to preserve wedding memories forever.',
    price: 38,
    category: 'gift',
    occasions: ['wedding'],
    imageUrl: '/images/placeholder.svg', // memory-book.jpg',
    rating: 4.7,
    reviewCount: 145,
    inStock: true,
  },
];

// Corporate Gifts
export const corporateGifts: Product[] = [
  {
    id: 'gift-009',
    name: 'Executive Gift Set',
    description: 'Premium pen, leather notebook, and desk accessories in a luxury gift box.',
    price: 95,
    category: 'gift',
    occasions: ['corporate'],
    imageUrl: '/images/placeholder.svg', // executive-set.jpg',
    rating: 4.9,
    reviewCount: 89,
    inStock: true,
  },
  {
    id: 'gift-010',
    name: 'Corporate Gift Tower',
    description: 'Gourmet snacks and treats stacked in an impressive presentation tower.',
    price: 75,
    category: 'gift',
    occasions: ['corporate', 'holiday'],
    imageUrl: '/images/placeholder.svg', // gift-tower.jpg',
    rating: 4.8,
    reviewCount: 156,
    inStock: true,
  },
];

// Cake Flavors
export const cakeFlavors: CakeFlavor[] = [
  {
    id: 'flavor-001',
    name: 'Chocolate Fudge',
    description: 'Rich, decadent chocolate cake with velvety fudge frosting',
    basePrice: 35,
  },
  {
    id: 'flavor-002',
    name: 'Vanilla Bean',
    description: 'Classic vanilla cake made with real vanilla beans',
    basePrice: 30,
  },
  {
    id: 'flavor-003',
    name: 'Red Velvet',
    description: 'Southern classic with cream cheese frosting',
    basePrice: 40,
  },
  {
    id: 'flavor-004',
    name: 'Lemon Bliss',
    description: 'Light and refreshing lemon cake with citrus frosting',
    basePrice: 35,
  },
  {
    id: 'flavor-005',
    name: 'Strawberry Dream',
    description: 'Fresh strawberry cake with strawberry buttercream',
    basePrice: 38,
  },
  {
    id: 'flavor-006',
    name: 'Carrot Cake',
    description: 'Moist spiced cake with cream cheese frosting and walnuts',
    basePrice: 36,
  },
  {
    id: 'flavor-007',
    name: 'Marble Delight',
    description: 'Perfect blend of chocolate and vanilla swirled together',
    basePrice: 33,
  },
  {
    id: 'flavor-008',
    name: 'Coffee Mocha',
    description: 'Espresso-infused cake with mocha buttercream',
    basePrice: 42,
  },
  {
    id: 'flavor-009',
    name: 'Coconut Paradise',
    description: 'Tropical coconut cake with coconut cream frosting',
    basePrice: 38,
  },
  {
    id: 'flavor-010',
    name: 'Funfetti Celebration',
    description: 'Colorful sprinkle-filled vanilla cake, perfect for parties',
    basePrice: 32,
  },
  {
    id: 'flavor-011',
    name: 'Black Forest',
    description: 'Chocolate cake layered with cherries and whipped cream',
    basePrice: 45,
  },
  {
    id: 'flavor-012',
    name: 'Almond Amaretto',
    description: 'Sophisticated almond cake with amaretto frosting',
    basePrice: 44,
  },
];

// Cake Sizes
export const cakeSizes: CakeSize[] = [
  {
    id: 'size-small',
    name: 'Small',
    serves: '6-8 people',
    priceMultiplier: 1.0,
  },
  {
    id: 'size-medium',
    name: 'Medium',
    serves: '12-16 people',
    priceMultiplier: 1.6,
  },
  {
    id: 'size-large',
    name: 'Large',
    serves: '25-30 people',
    priceMultiplier: 2.4,
  },
  {
    id: 'size-xlarge',
    name: 'Extra Large',
    serves: '40-50 people',
    priceMultiplier: 3.5,
  },
];

// Cake Themes
export const cakeThemes: CakeTheme[] = [
  {
    id: 'theme-001',
    name: 'Floral Elegance',
    description: 'Beautiful handcrafted sugar flowers and delicate decorations',
    additionalCost: 25,
    imageUrl: '/images/placeholder.svg',
    _old: '/images/cake-themes/floral.jpg',
  },
  {
    id: 'theme-002',
    name: 'Sports Champion',
    description: 'Custom sports-themed decorations for the athlete in your life',
    additionalCost: 20,
    imageUrl: '/images/placeholder.svg',
    _old: '/images/cake-themes/sports.jpg',
  },
  {
    id: 'theme-003',
    name: 'Princess Dreams',
    description: 'Magical princess castle design with sparkles and tiaras',
    additionalCost: 30,
    imageUrl: '/images/placeholder.svg',
    _old: '/images/cake-themes/princess.jpg',
  },
  {
    id: 'theme-004',
    name: 'Corporate Professional',
    description: 'Elegant corporate branding and professional design',
    additionalCost: 35,
    imageUrl: '/images/placeholder.svg',
    _old: '/images/cake-themes/corporate.jpg',
  },
  {
    id: 'theme-005',
    name: 'Vintage Romance',
    description: 'Timeless vintage design with lace patterns and pearls',
    additionalCost: 28,
    imageUrl: '/images/placeholder.svg',
    _old: '/images/cake-themes/vintage.jpg',
  },
  {
    id: 'theme-006',
    name: 'Modern Geometric',
    description: 'Contemporary geometric patterns and bold colors',
    additionalCost: 22,
    imageUrl: '/images/placeholder.svg',
    _old: '/images/cake-themes/geometric.jpg',
  },
  {
    id: 'theme-007',
    name: 'Tropical Paradise',
    description: 'Vibrant tropical flowers and exotic decorations',
    additionalCost: 26,
    imageUrl: '/images/placeholder.svg',
    _old: '/images/cake-themes/tropical.jpg',
  },
  {
    id: 'theme-008',
    name: 'Superhero Adventure',
    description: 'Action-packed superhero theme with custom character designs',
    additionalCost: 32,
    imageUrl: '/images/placeholder.svg',
    _old: '/images/cake-themes/superhero.jpg',
  },
  {
    id: 'theme-009',
    name: 'Winter Wonderland',
    description: 'Snowy winter scene with snowflakes and icicles',
    additionalCost: 27,
    imageUrl: '/images/placeholder.svg',
    _old: '/images/cake-themes/winter.jpg',
  },
  {
    id: 'theme-010',
    name: 'Garden Party',
    description: 'Fresh garden theme with butterflies and botanical elements',
    additionalCost: 24,
    imageUrl: '/images/placeholder.svg',
    _old: '/images/cake-themes/garden.jpg',
  },
];

// Helper function to get all products
export const getAllProducts = (): Product[] => {
  return [...featuredGifts, ...birthdayGifts, ...weddingGifts, ...corporateGifts];
};

// Helper function to get products by occasion
export const getProductsByOccasion = (occasion: OccasionType): Product[] => {
  return getAllProducts().filter((product) => product.occasions.includes(occasion));
};

// Helper function to calculate custom cake price
export const calculateCakePrice = (
  flavorId: string,
  sizeId: string,
  themeId?: string
): number => {
  const flavor = cakeFlavors.find((f) => f.id === flavorId);
  const size = cakeSizes.find((s) => s.id === sizeId);
  const theme = themeId ? cakeThemes.find((t) => t.id === themeId) : null;

  if (!flavor || !size) return 0;

  const basePrice = flavor.basePrice * size.priceMultiplier;
  const themePrice = theme ? theme.additionalCost : 0;

  return Math.round(basePrice + themePrice);
};
