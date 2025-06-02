import { Quiz } from '../../types';

const mathQuiz: Quiz = {
  id: 'math-101',
  title: 'Mathematics Fundamentals',
  subject: 'Mathematics',
  timeLimit: 30,
  questions: [
    {
      id: '1',
      text: 'What is the value of π (pi) to two decimal places?',
      options: ['3.12', '3.14', '3.16', '3.18'],
      correctAnswer: 1,
      explanation: 'π is approximately equal to 3.14159..., which rounds to 3.14.'
    },
    {
      id: '2',
      text: 'Solve for x: 2x + 5 = 13',
      options: ['x = 3', 'x = 4', 'x = 5', 'x = 6'],
      correctAnswer: 1,
      explanation: 'Subtracting 5 from both sides: 2x = 8. Dividing both sides by 2: x = 4'
    },
    {
      id: '3',
      text: 'What is the area of a circle with radius 5 units?',
      options: ['25π', '10π', '15π', '20π'],
      correctAnswer: 0,
      explanation: 'Area of a circle = πr². With r = 5, Area = π(5)² = 25π square units'
    },
    {
      id: '4',
      text: 'What is the sum of angles in a triangle?',
      options: ['90°', '180°', '270°', '360°'],
      correctAnswer: 1,
      explanation: 'The sum of angles in any triangle is always 180 degrees'
    },
    {
      id: '5',
      text: 'Simplify: (x² + 2x) + (3x² - x)',
      options: ['4x² + x', '4x² + 3x', '3x² + x', '4x² - x'],
      correctAnswer: 0,
      explanation: 'Combining like terms: (x² + 3x²) + (2x - x) = 4x² + x'
    }
  ]
};

export default mathQuiz;