import { Quiz, ClassLevel, Subject } from '../../types';

export const quizzes: Quiz[] = [
  {
    id: 'math-101',
    title: 'Mathematics Fundamentals',
    subject: 'Mathematics',
    description: 'Test your understanding of basic mathematical concepts including algebra, geometry, and trigonometry.',
    externalUrl: 'https://www.khanacademy.org/math/quiz',
    imageUrl: 'https://images.pexels.com/photos/3729557/pexels-photo-3729557.jpeg',
    duration: 60,
    questionCount: 25,
    classLevel: '10th',
    topics: ['Algebra', 'Geometry', 'Trigonometry']
  },
  {
    id: 'physics-101',
    title: 'Physics Concepts',
    subject: 'Physics',
    description: 'Challenge yourself with questions on mechanics, waves, and energy conservation.',
    externalUrl: 'https://www.physicsclassroom.com/Physics-Interactives',
    imageUrl: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg',
    duration: 45,
    questionCount: 20,
    classLevel: '11th',
    topics: ['Mechanics', 'Waves', 'Energy']
  },
  {
    id: 'chemistry-101',
    title: 'Chemistry Fundamentals',
    subject: 'Chemistry',
    description: 'Explore chemical bonding, periodic table, and molecular structures through interactive questions.',
    externalUrl: 'https://www.chemtutor.com/quiz.htm',
    imageUrl: 'https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg',
    duration: 30,
    questionCount: 15,
    classLevel: '9th',
    topics: ['Chemical Bonding', 'Periodic Table', 'Molecular Structure']
  },
  {
    id: 'biology-101',
    title: 'Biology Basics',
    subject: 'Biology',
    description: 'Test your knowledge of cell biology, genetics, and human anatomy.',
    externalUrl: 'https://www.biologycorner.com/quizzes',
    imageUrl: 'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg',
    duration: 40,
    questionCount: 30,
    classLevel: '12th',
    topics: ['Cell Biology', 'Genetics', 'Human Anatomy']
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