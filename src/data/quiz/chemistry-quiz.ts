import { Quiz } from '../../types';

const chemistryQuiz: Quiz = {
  id: 'chemistry-101',
  title: 'Chemistry Fundamentals',
  subject: 'Chemistry',
  timeLimit: 30,
  questions: [
    {
      id: '1',
      text: 'What is the atomic number of Carbon?',
      options: ['4', '6', '8', '12'],
      correctAnswer: 1,
      explanation: 'Carbon has 6 protons, giving it an atomic number of 6'
    },
    {
      id: '2',
      text: 'Which of these is a noble gas?',
      options: ['Nitrogen', 'Oxygen', 'Helium', 'Chlorine'],
      correctAnswer: 2,
      explanation: 'Helium is a noble gas, characterized by its stable electron configuration'
    },
    {
      id: '3',
      text: 'What is the pH of a neutral solution?',
      options: ['0', '7', '14', '10'],
      correctAnswer: 1,
      explanation: 'A neutral solution has a pH of 7'
    },
    {
      id: '4',
      text: 'Which type of bond involves the sharing of electrons?',
      options: ['Ionic', 'Covalent', 'Metallic', 'Hydrogen'],
      correctAnswer: 1,
      explanation: 'A covalent bond involves the sharing of electrons between atoms'
    },
    {
      id: '5',
      text: 'What is the chemical formula for water?',
      options: ['H2O', 'CO2', 'NaCl', 'O2'],
      correctAnswer: 0,
      explanation: 'Water has the chemical formula H2O, representing two hydrogen atoms and one oxygen atom'
    }
  ]
};

export default chemistryQuiz;