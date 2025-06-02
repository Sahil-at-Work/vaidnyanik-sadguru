import { Quiz } from '../../types';

const biologyQuiz: Quiz = {
  id: 'biology-101',
  title: 'Biology Basics',
  subject: 'Biology',
  timeLimit: 30,
  questions: [
    {
      id: '1',
      text: 'What is the powerhouse of the cell?',
      options: ['Nucleus', 'Mitochondria', 'Golgi Body', 'Endoplasmic Reticulum'],
      correctAnswer: 1,
      explanation: 'Mitochondria are known as the powerhouse of the cell as they produce energy through cellular respiration'
    },
    {
      id: '2',
      text: 'Which process produces glucose using sunlight?',
      options: ['Respiration', 'Photosynthesis', 'Fermentation', 'Digestion'],
      correctAnswer: 1,
      explanation: 'Photosynthesis is the process by which plants convert sunlight into glucose'
    },
    {
      id: '3',
      text: 'What is the basic unit of heredity?',
      options: ['Cell', 'Chromosome', 'Gene', 'DNA'],
      correctAnswer: 2,
      explanation: 'Genes are the basic units of heredity, carrying genetic information from parents to offspring'
    },
    {
      id: '4',
      text: 'Which blood type is known as the universal donor?',
      options: ['A+', 'B+', 'AB+', 'O-'],
      correctAnswer: 3,
      explanation: 'O- is the universal donor as it can be given to patients of all blood types'
    },
    {
      id: '5',
      text: 'What is the largest organ in the human body?',
      options: ['Heart', 'Brain', 'Skin', 'Liver'],
      correctAnswer: 2,
      explanation: 'The skin is the largest organ in the human body'
    }
  ]
};

export default biologyQuiz;