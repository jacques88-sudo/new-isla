import type { Tour } from '../types/tour'

export const tours: Tour[] = [
  {
    id: 1,
    title: 'Tenerife Sunset Boat Tour',
    island: 'Tenerife',
    category: 'Boat',
    duration: '3 hours',
    price: 59,
    rating: 4.8,
    image: '/images/tour-1.jpg',
    description: 'A relaxing sunset boat experience with ocean views and photo stops.',
  },
  {
    id: 2,
    title: 'Teide Volcano Adventure',
    island: 'Tenerife',
    category: 'Adventure',
    duration: '6 hours',
    price: 79,
    rating: 4.9,
    image: '/images/tour-2.jpg',
    description: 'A full-day experience exploring volcanic landscapes and scenic viewpoints.',
  },
  {
    id: 3,
    title: 'Canarian Food Experience',
    island: 'Gran Canaria',
    category: 'Food',
    duration: '4 hours',
    price: 45,
    rating: 4.7,
    image: '/images/tour-3.jpg',
    description: 'Taste local specialties and discover traditional flavors with a guided visit.',
  },
]
