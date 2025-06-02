import post1 from './post1';
import post2 from './post2';
import post3 from './post3';
import post4 from './post4';
import post5 from './post5';
import post6 from './post6';
import post7 from './post7';
import post8 from './post8';
import post9 from './post9';
import post10 from './post10';
import post11 from './post11';
import post12 from './post12';
import post13 from './post13';
import post14 from './post14';
import post15 from './post15';
import post16 from './post16';
import post17 from './post17';
import post18 from './post18';
import post19 from './post19';
import post20 from './post20';
import post21 from './post21';
import post22 from './post22';
import post23 from './post23';
import post24 from './post24';
import post25 from './post25';
import post26 from './post26';
import post27 from './post27';
import post28 from './post28';
import post29 from './post29';
import post30 from './post30';


import { Post, ClassLevel, Subject } from '../../types';

export const posts = [
  post1, post2, post3, post4, post5, post6, post7, post8, post9, post10, post11, post12, post13, post14, post15, 
  post16, post17, post18, post19,
  post20, post21, post22, post23,
  post24, post25, post26, post27, post28, post29, post30

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