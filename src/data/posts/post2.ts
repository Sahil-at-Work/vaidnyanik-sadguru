import { Post } from '../../types';

const post: Post = {
  id: '2',
  title: 'Cell Division: Mitosis vs Meiosis',
  images: [
    {
      url: 'https://images.pexels.com/photos/954585/pexels-photo-954585.jpeg',
      caption: 'Cell division under microscope'
    },
    {
      url: 'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg',
      caption: 'Stages of mitosis'
    },
    {
      url: 'https://images.pexels.com/photos/3825379/pexels-photo-3825379.jpeg',
      caption: 'DNA replication process'
    },
    {
      url: 'https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg',
      caption: 'Cell membrane structure'
    },
    {
      url: 'https://images.pexels.com/photos/3825567/pexels-photo-3825567.jpeg',
      caption: 'Chromosomal arrangement'
    }
  ],
  caption: 'Explore the fascinating differences between mitosis and meiosis, the two types of cell division. Understand their stages and biological significance.',
  class: '9th',
  subject: 'Biology',
  topics: ['Cell Biology', 'Reproduction', 'Genetics'],
  createdAt: '2025-05-28T14:30:00Z',
  likes: 132,
  bookmarked: true
};

export default post;