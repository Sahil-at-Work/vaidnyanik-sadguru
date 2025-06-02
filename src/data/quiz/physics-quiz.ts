import { Quiz } from '../../types';

const physicsQuiz: Quiz = {
  id: 'physics-101',
  title: 'Basic Physics Concepts',
  subject: 'Physics',
  timeLimit: 30,
  questions: [
    {
      id: '1',
      text: 'What is the SI unit of force?',
      options: ['Joule', 'Newton', 'Pascal', 'Watt'],
      correctAnswer: 1,
      explanation: 'The SI unit of force is the Newton (N)'
    },
    {
      id: '2',
      text: 'Which law states that energy cannot be created or destroyed?',
      options: [
        'Newton\'s First Law',
        'Law of Conservation of Energy',
        'Ohm\'s Law',
        'Boyle\'s Law'
      ],
      correctAnswer: 1,
      explanation: 'The Law of Conservation of Energy states that energy can neither be created nor destroyed, only transformed from one form to another'
    },
    {
      id: '3',
      text: 'What is the acceleration due to gravity on Earth (approximate value)?',
      options: ['5 m/s²', '7.5 m/s²', '9.8 m/s²', '12 m/s²'],
      correctAnswer: 2,
      explanation: 'The acceleration due to gravity on Earth is approximately 9.8 meters per second squared'
    },
    {
      id: '4',
      text: 'Which type of energy is associated with motion?',
      options: ['Potential Energy', 'Kinetic Energy', 'Thermal Energy', 'Nuclear Energy'],
      correctAnswer: 1,
      explanation: 'Kinetic energy is the energy possessed by an object due to its motion'
    },
    {
      id: '5',
      text: 'What is the unit of electrical resistance?',
      options: ['Ohm', 'Ampere', 'Volt', 'Watt'],
      correctAnswer: 0,
      explanation: 'The unit of electrical resistance is the Ohm (Ω)'
    }
  ]
};

export default physicsQuiz;