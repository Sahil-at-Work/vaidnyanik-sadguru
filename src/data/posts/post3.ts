import { Post } from '../../types';

const post: Post = {
  id: '3',
  title: 'Chemical Bonding Explained',
  images: [
    {
      url: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg',
      caption: 'Molecular structure visualization'
    },
    {
      url: 'https://images.pexels.com/photos/5726837/pexels-photo-5726837.jpeg',
      caption: 'Chemical bonds in 3D models'
    },
    {
      url: 'https://images.pexels.com/photos/8325710/pexels-photo-8325710.jpeg',
      caption: 'Periodic table elements'
    }
  ],
  caption: 'Dive into the world of chemical bonding. Learn about ionic, covalent, and metallic bonds and how they determine the properties of compounds.',
  class: '11th',
  subject: 'Chemistry',
  topics: ['Bonding', 'Molecular Structure', 'Periodic Table'],
  createdAt: '2025-05-25T09:15:00Z',
  likes: 98,
  bookmarked: false
};

export default post;