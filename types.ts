export interface HouseModel {
  id: string;
  model: string;
  tagline: string;
  specs: string;
  price: string;
  image_url: string;
  features: string[];
}

export interface Feature {
  icon: string;
  title: string;
  desc: string;
}

export const HOUSES: HouseModel[] = [
  {
    id: 'edna',
    model: 'Modelo Edna',
    tagline: 'A Clássica Moderna',
    specs: '3 Quartos | 3 Banheiros | 230m² (Total)',
    price: 'Investimento: U$ 280,000',
    image_url: 'http://wmbustamanteinvestments.com/wp-content/uploads/2025/11/5bf7bbbfc68aeddc691e9918164e9bc1-uncropped_scaled_within_1344_1008.webp',
    features: ['Design Minimalista', 'Cores Aconchegantes']
  },
  {
    id: 'felipe',
    model: 'Modelo Felipe & Gustavo',
    tagline: 'A Joia da Coroa',
    specs: '4 Quartos | 4 Banheiros | 236m² (Total)',
    price: 'Investimento: U$ 288,000',
    image_url: 'http://wmbustamanteinvestments.com/wp-content/uploads/2025/11/modelo-felipe-scaled.jpg',
    features: ['Maior Metragem', 'Espaço Imponente']
  },
  {
    id: 'loris',
    model: 'Modelo Loris',
    tagline: 'Sofisticação Aberta',
    specs: '3 Quartos | 3 Banheiros | 273m² (Total)',
    price: 'Investimento: U$ 245,000',
    image_url: 'http://wmbustamanteinvestments.com/wp-content/uploads/2025/11/modelo-loris-scaled.jpg',
    features: ['Comodidades de Ponta', 'Design Fluido']
  },
  {
    id: 'karina',
    model: 'Modelo Karina',
    tagline: 'O Refúgio Perfeito',
    specs: '3 Quartos | 2 Banheiros | 201m² (Total)',
    price: 'Investimento: U$ 200,008',
    image_url: 'http://wmbustamanteinvestments.com/wp-content/uploads/2025/11/modelo-karina.png',
    features: ['Acabamento Sofisticado', 'Eficiência Inteligente']
  }
];