import { StaticImageData } from 'next/image';

// Logo
import logo from './mainlogo.png';
import freshmatelogo from './freshmatelogp.png';

// Basil Seed Products
import basilSeedApple from './products/Basil Seed Apple.png';
import basilSeedLychee from './products/Basil Seed Lyche flavour.png';
import basilSeedMango from './products/Basil Seed Mango.png';
import basilSeedMixedFruit from './products/Basil Seed Mixed fruit.png';
import basilSeedMixedFruitGlass from './products/Basil Seed Mixed fruit glass.png';
import basilSeedOrange from './products/Basil Seed Orange.png';
import basilSeedPeach from './products/Basil Seed Peach Flavour.png';
import basilSeedPineApple from './products/basil seed Pine Apple.png';
import basilSeedPineAppleGlass from './products/Basil Seed PineApple glass.png';
import basilSeedSharbat from './products/Basil Seed Sharbat.png';
import basilSeedStrawberry from './products/Basil Seed strawberry.png';
import basilSeedPineGuava from './products/Basil Seel Pine Gauva.png';
import basilSeedPomegranate from './products/Bssil Seed pomegranate flavour.png';
import basilSeedPomegranateGlass from './products/Basil Seed Pomegranate Flavour glass .png';

// Nata de Coco Products
import cocoMango2 from './products/coc mango (2).png';
import cocoMango from './products/coc mango.png';
import cocoOrange from './products/coc orange.png';
import cocoBlueberry from './products/coco blue berry.png';
import cocoBubblegum from './products/coco bubblegum.png';
import cocoCoconut from './products/coco drink coconut.png';
import cocoDrinkMango from './products/coco drink mango.png';
import cocoPineApple from './products/coco drink PineApple.png';
import cocoFruitPunch from './products/Coco Fruit Punch.png';
import cocoLemonLime from './products/coco lemon lime.png';
import cocoLychee from './products/Coco Lyche.png';
import cocoPineApple2 from './products/coco pine apple.png';
import cocoStrawberry from './products/coco strawberry.png';
import mrCocoMango from './products/mr. coco mango.png';
import mrCocoRedGrapes from './products/mr. coco red grapes.png';
import nataDeCoco1 from './products/nata de coco 1.png';

// Aloe Vera Products
import aloeVeraOriginal from './products/Aloe Vera Original.png';
import aloeVeraOriginalGlass from './products/Aloe Vera original Glass.png';
import aloeVeraPeach from './products/Aloe Vera  Peach Flavour.png';
import aloeVeraPeachGlass from './products/Aloe Vera Peach Flavour Glass.png';
import aloeVeraLychee from './products/Aloe vVera Lychee flavour.png';
import aloeVeraLycheeGlass from './products/Aloe vera Lychee Flavour Glass.png';

// Chia Seed Products
import chiaAloeVera from './products/aloevera chia seed drink.png';
import chiaApple from './products/apple chia seed drink.png';
import chiaMango from './products/mango chia seed drink.png';

// Falooda Products
import faloodaBadamZafrani from './products/Falooda badam zafrani.png';
import faloodaKulfa from './products/Falooda kulfa.png';
import faloodaPista from './products/Falooda Pista.png';
import faloodaRose from './products/Falooda Rose.png';
import faloodaMango from './products/mango Falooda.png';

// Certificate Images
import isoCert from './certificates/iso 22000.jpg';
import halalCert from './certificates/international hala.jpeg';
import sindhCert from './certificates/sindh food authority.png';

// Product Data Structure
export interface Product {
  id: string;
  name: string;
  category: 'Basil Seed' | 'Nata de Coco' | 'Falooda' | 'Aloe Vera' | 'Chia Seed';
  image: string | StaticImageData;
  description: string;
  brand?: string;
  bottleType: 'Glass' | 'PET';
}

export const products: Product[] = [
  // Basil Seed Products
  { id: '1', name: 'Basil Seed Apple', category: 'Basil Seed', image: basilSeedApple, description: 'Refreshing basil seed drink with crisp apple flavor', bottleType: 'Glass' },
  { id: '2', name: 'Basil Seed Lychee', category: 'Basil Seed', image: basilSeedLychee, description: 'Exotic basil seed drink with sweet lychee taste', bottleType: 'Glass' },
  { id: '3', name: 'Basil Seed Mango', category: 'Basil Seed', image: basilSeedMango, description: 'Tropical basil seed drink with rich mango flavor', bottleType: 'Glass' },
  { id: '4', name: 'Basil Seed Mixed Fruit', category: 'Basil Seed', image: basilSeedMixedFruit, description: 'Delicious basil seed drink with mixed fruit blend', bottleType: 'Glass' },
  { id: '5', name: 'Basil Seed Orange', category: 'Basil Seed', image: basilSeedOrange, description: 'Citrusy basil seed drink with fresh orange taste', bottleType: 'Glass' },
  { id: '6', name: 'Basil Seed Peach', category: 'Basil Seed', image: basilSeedPeach, description: 'Sweet basil seed drink with juicy peach flavor', bottleType: 'Glass' },
  { id: '7', name: 'Basil Seed Pineapple', category: 'Basil Seed', image: basilSeedPineApple, description: 'Tropical basil seed drink with tangy pineapple taste', bottleType: 'Glass' },
  { id: '8', name: 'Basil Seed Sharbat', category: 'Basil Seed', image: basilSeedSharbat, description: 'Traditional basil seed sharbat with authentic flavor', bottleType: 'Glass' },
  { id: '9', name: 'Basil Seed Strawberry', category: 'Basil Seed', image: basilSeedStrawberry, description: 'Sweet basil seed drink with fresh strawberry taste', bottleType: 'Glass' },
  { id: '10', name: 'Basil Seed Pine Guava', category: 'Basil Seed', image: basilSeedPineGuava, description: 'Unique basil seed drink with pine guava flavor', bottleType: 'Glass' },
  { id: '11', name: 'Basil Seed Pomegranate', category: 'Basil Seed', image: basilSeedPomegranate, description: 'Antioxidant-rich basil seed drink with pomegranate', bottleType: 'Glass' },
  { id: '28', name: 'Basil Seed Mixed Fruit', category: 'Basil Seed', image: basilSeedMixedFruitGlass, description: 'Premium glass bottle basil seed with mixed fruit blend', bottleType: 'PET' },
  { id: '29', name: 'Basil Seed Pineapple', category: 'Basil Seed', image: basilSeedPineAppleGlass, description: 'Premium glass bottle basil seed with pineapple flavor', bottleType: 'PET' },
  { id: '30', name: 'Basil Seed Pomegranate', category: 'Basil Seed', image: basilSeedPomegranateGlass, description: 'Premium glass bottle basil seed with pomegranate flavor', bottleType: 'PET' },

  // Nata de Coco Products
  { id: '27', name: 'Blueberry', category: 'Nata de Coco', image: nataDeCoco1, description: 'Dwink glass bottle nata de coco with blueberry taste', bottleType: 'Glass' },
  { id: '12', name: 'Mango Special', category: 'Nata de Coco', image: cocoMango2, description: 'Premium nata de coco with rich mango flavor', bottleType: 'Glass' },
  { id: '16', name: 'Bubblegum', category: 'Nata de Coco', image: cocoBubblegum, description: 'Fun nata de coco with unique bubblegum flavor', bottleType: 'Glass' },
  { id: '17', name: 'Coconut', category: 'Nata de Coco', image: cocoCoconut, description: 'Pure nata de coco with natural coconut taste', bottleType: 'Glass' },
  { id: '18', name: 'Drink Mango', category: 'Nata de Coco', image: cocoDrinkMango, description: 'Smooth nata de coco drink with mango essence', bottleType: 'Glass' },
  { id: '19', name: 'Pineapple', category: 'Nata de Coco', image: cocoPineApple, description: 'Tropical nata de coco with tangy pineapple flavor', bottleType: 'Glass' },
  { id: '20', name: 'Fruit Punch', category: 'Nata de Coco', image: cocoFruitPunch, description: 'Mixed fruit nata de coco with punch flavor', bottleType: 'Glass' },
  { id: '21', name: 'Lemon Lime', category: 'Nata de Coco', image: cocoLemonLime, description: 'Zesty nata de coco with lemon lime twist', bottleType: 'Glass' },
  { id: '22', name: 'Lychee', category: 'Nata de Coco', image: cocoLychee, description: 'Exotic nata de coco with sweet lychee flavor', bottleType: 'Glass' },
  { id: '15', name: 'Blueberry', category: 'Nata de Coco', image: cocoBlueberry, description: 'Antioxidant nata de coco with sweet blueberry taste', brand: 'Mr. Coco', bottleType: 'Glass' },
  // Plastic Bottle Products (Mr. Coco Brand) - Show at end
  { id: '24', name: 'Strawberry', category: 'Nata de Coco', image: cocoStrawberry, description: 'Mr. Coco plastic bottle with strawberry flavor', brand: 'Mr. Coco', bottleType: 'PET' },
  { id: '13', name: 'Mango', category: 'Nata de Coco', image: cocoMango, description: 'Mr. Coco plastic bottle with tropical mango taste', brand: 'Mr. Coco', bottleType: 'PET' },
  { id: '26', name: 'Red Grapes', category: 'Nata de Coco', image: mrCocoRedGrapes, description: 'Mr. Coco plastic bottle with red grapes taste', brand: 'Mr. Coco', bottleType: 'PET' },
  { id: '14', name: 'Orange', category: 'Nata de Coco', image: cocoOrange, description: 'Mr. Coco plastic bottle with citrus orange flavor', brand: 'Mr. Coco', bottleType: 'PET' },
  { id: '23', name: 'Pineapple Classic', category: 'Nata de Coco', image: cocoPineApple2, description: 'Mr. Coco plastic bottle with pineapple taste', brand: 'Mr. Coco', bottleType: 'PET' },
  { id: '25', name: 'Mr. Coco Mango', category: 'Nata de Coco', image: mrCocoMango, description: 'Premium Mr. Coco brand with mango flavor', brand: 'Mr. Coco', bottleType: 'PET' },

  // Falooda Products
  { id: '31', name: 'Falooda Badam Zafrani', category: 'Falooda', image: faloodaBadamZafrani, description: 'Traditional falooda with almond and saffron flavor', bottleType: 'Glass' },
  { id: '32', name: 'Falooda Kulfa', category: 'Falooda', image: faloodaKulfa, description: 'Classic kulfa flavored falooda drink', bottleType: 'Glass' },
  { id: '33', name: 'Falooda Pista', category: 'Falooda', image: faloodaPista, description: 'Rich pistachio flavored falooda', bottleType: 'Glass' },
  { id: '34', name: 'Falooda Rose', category: 'Falooda', image: faloodaRose, description: 'Aromatic rose flavored falooda', bottleType: 'Glass' },
  { id: '35', name: 'Mango Falooda', category: 'Falooda', image: faloodaMango, description: 'Tropical mango flavored falooda', bottleType: 'Glass' },

  // Aloe Vera Products
  { id: '36', name: 'Aloe Vera Original', category: 'Aloe Vera', image: aloeVeraOriginal, description: 'Pure aloe vera drink with natural healing properties', bottleType: 'PET' },
  { id: '37', name: 'Aloe Vera Original', category: 'Aloe Vera', image: aloeVeraOriginalGlass, description: 'Premium glass bottle aloe vera original flavor', bottleType: 'Glass' },
  { id: '38', name: 'Aloe Vera Peach', category: 'Aloe Vera', image: aloeVeraPeach, description: 'Refreshing aloe vera with sweet peach flavor', bottleType: 'PET' },
  { id: '39', name: 'Aloe Vera Peach', category: 'Aloe Vera', image: aloeVeraPeachGlass, description: 'Premium glass bottle aloe vera with peach flavor', bottleType: 'Glass' },
  { id: '40', name: 'Aloe Vera Lychee', category: 'Aloe Vera', image: aloeVeraLychee, description: 'Exotic aloe vera with lychee flavor', bottleType: 'PET' },
  { id: '41', name: 'Aloe Vera Lychee', category: 'Aloe Vera', image: aloeVeraLycheeGlass, description: 'Premium glass bottle aloe vera with lychee flavor', bottleType: 'Glass' },

  // Chia Seed Products
  { id: '42', name: 'Chia Seed Aloe Vera', category: 'Chia Seed', image: chiaAloeVera, description: 'Nutritious chia seed drink with aloe vera benefits', bottleType: 'Glass' },
  { id: '43', name: 'Chia Seed Apple', category: 'Chia Seed', image: chiaApple, description: 'Healthy chia seed drink with crisp apple flavor', bottleType: 'Glass' },
  { id: '44', name: 'Chia Seed Mango', category: 'Chia Seed', image: chiaMango, description: 'Tropical chia seed drink with rich mango taste', bottleType: 'Glass' }
];

export const certificates = {
  iso: isoCert,
  halal: halalCert,
  sindh: sindhCert
};

export { logo, freshmatelogo };

// Helper functions
export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'Show All') return products;
  return products.filter(product => product.category === category);
};

export const getProductImage = (id: string) => {
  const product = getProductById(id);
  return product?.image || products[0].image;
};