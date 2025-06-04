import { Quiz, ClassLevel, Subject } from '../../types';

export const quizzes: Quiz[] = [
  {
    id: 'math-11',
    title: 'Vectors',
    subject: 'Mathematics',
    description: '',
    externalUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScPZBBO-55t-_lZueJ9n0b2-eYtEwZgDaRUj63rUQ318qesMw/viewform?usp=header',
    imageUrl: 'https://images.pexels.com/photos/3729557/pexels-photo-3729557.jpeg',
    duration: 30,
    questionCount: 12,
    classLevel: '12th',
    topics: ['Mathematics', 'Vectors']
  },
  {
    id: 'physics-11',
    title: 'Units and Measurements',
    subject: 'Physics',
    description: '',
    externalUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfJ8LhEIzUKKVYTqTmAsfEHTvmf4XJp4nhXvCKj0_-fI2ciXQ/viewform?usp=header',
    imageUrl: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg',
    duration: 30,
    questionCount: 10,
    classLevel: '11th',
    topics: ['Physics', 'Units and Measurements']
  },
  {
    id: 'chemistry-dpp',
    title: 'Chemistry-DPP (C.11)',
    subject: 'Physics',
    description: '',
    externalUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeI1xhuM5WB6bOXq2yuIC7mgIOdQTNORXmKoLPh3nYdt3m2tw/viewform?usp=dialog',
    imageUrl: 'https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg',
    duration: 20,
    questionCount: 10,
    classLevel: '11th',
    topics: ['Chemistry', 'Some Basic Concepts of Chemistry', 'DPP']
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