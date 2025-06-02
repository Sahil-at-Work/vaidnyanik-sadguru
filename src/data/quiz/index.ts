import { Quiz, ClassLevel, Subject } from '../../types';

export const quizzes: Quiz[] = [
  {
    id: 'math-125',
    title: 'VECTORS',
    subject: 'Mathematics',
    description: 'Test your understanding of basic mathematical concepts including algebra, geometry, and trigonometry.',
    externalUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScPZBBO-55t-_lZueJ9n0b2-eYtEwZgDaRUj63rUQ318qesMw/viewform?usp=header',
    imageUrl: 'https://images.pexels.com/photos/3729557/pexels-photo-3729557.jpeg',
    duration: 60,
    questionCount: 25,
    classLevel: '12th',
    topics: ['Vectors', 'Co-Ordinate Geometry']
  },
  {
    id: 'physics-101',
    title: 'Gravitation',
    subject: 'Physics',
    description: 'Challenge yourself with questions on mechanics, waves, and energy conservation.',
    externalUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScPZBBO-55t-_lZueJ9n0b2-eYtEwZgDaRUj63rUQ318qesMw/viewform?usp=header',
    imageUrl: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg',
    duration: 45,
    questionCount: 20,
    classLevel: '11th',
    topics: ['Gravitation']
  },
  {
    id: 'chemistry-101',
    title: 'Basic Concepts of Chemistry',
    subject: 'Chemistry',
    description: 'Explore chemical bonding, periodic table, and molecular structures through interactive questions.',
    externalUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScPZBBO-55t-_lZueJ9n0b2-eYtEwZgDaRUj63rUQ318qesMw/viewform?usp=header',
    imageUrl: 'https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg',
    duration: 30,
    questionCount: 15,
    classLevel: '9th',
    topics: ['Chemical Bonding', 'Periodic Table', 'Molecular Structure']
  }
];

export const getQuizById = (id: string): Quiz | undefined => {
  return quizzes.find(quiz => quiz.id === id);
};

export const getAllSubjects = (): Subject[] => {
  return Array.from(new Set(quizzes.map(quiz => quiz.subject)));
};

export const getAllClassLevels = (): ClassLevel[] => {
  return Array.from(new Set(quizzes.map(quiz => quiz.classLevel)));
};

export const getAllTopics = (): string[] => {
  const topicsSet = new Set<string>();
  quizzes.forEach(quiz => {
    quiz.topics.forEach(topic => topicsSet.add(topic));
  });
  return Array.from(topicsSet).sort();
};