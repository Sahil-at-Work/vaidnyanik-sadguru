import post1 from './post1';
import post2 from './post2';
import post3 from './post3';

import { Post, ClassLevel, Subject } from '../../types';

export const posts = [
  post1, post2, post3
];

export const getAllTopics = (): string[] => {
  const topicsSet = new Set<string>();
  
  posts.forEach(post => {
    post.topics.forEach(topic => {
      topicsSet.add(topic);
    });
  });
  
  return Array.from(topicsSet).sort();
};

export const getAllClassLevels = (): ClassLevel[] => {
  return ['8th', '9th', '10th', '11th', '12th'];
};

export const getAllSubjects = (): Subject[] => {
  const subjectsSet = new Set<Subject>();
  
  posts.forEach(post => {
    subjectsSet.add(post.subject);
  });
  
  return Array.from(subjectsSet).sort();
};