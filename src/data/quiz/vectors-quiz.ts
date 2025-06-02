import { Quiz } from '../../types';

const vectorsQuiz: Quiz = {
  id: 'vectors-101',
  title: 'Vectors Fundamentals',
  subject: 'Mathematics',
  timeLimit: 45, // Increased time limit slightly for vector questions
  questions: [
    {
      id: '1',
      text: 'ABCD is a trapezium with AB parallel to DC and DC = 2AB. M is the mid-point of DC. If $\\vec{AB} = \\mathbf{p}$ and $\\vec{BC} = \\mathbf{q}$, then $\\vec{AM}$ in terms of $\\mathbf{p}$ and $\\mathbf{q}$ is:',
      options: ['$\\mathbf{p} + \\mathbf{q}$', '$\\mathbf{p} - \\mathbf{q}$', '$2\\mathbf{p} + \\mathbf{q}$', '$\\mathbf{p} + \\frac{1}{2}\\mathbf{q}$'],
      correctAnswer: 0,
      explanation: ''
    },
    {
      id: '2',
      text: 'The points A, B, and C have position vectors $\\mathbf{a}$, $\\mathbf{b}$, and $\\mathbf{c}$ respectively. The point P divides AB in the ratio 2:1. The vector $\\vec{PC}$ in terms of $\\mathbf{a}$, $\\mathbf{b}$, and $\\mathbf{c}$ is:',
      options: ['$\\mathbf{c} - \\frac{1}{3}\\mathbf{a} - \\frac{2}{3}\\mathbf{b}$', '$\\frac{1}{3}\\mathbf{a} + \\frac{2}{3}\\mathbf{b} - \\mathbf{c}$', '$\\mathbf{c} - \\frac{2}{3}\\mathbf{a} - \\frac{1}{3}\\mathbf{b}$', '$\\frac{2}{3}\\mathbf{a} + \\frac{1}{3}\\mathbf{b} - \\mathbf{c}$'],
      correctAnswer: 2,
      explanation: ''
    },
    {
      id: '3',
      text: 'In a pentagon ABCDE, which of the following expressions simplifies to $\\vec{AC}$?',
      options: ['$\\vec{AB} + \\vec{BC} + \\vec{CD}$', '$\\vec{AD} - \\vec{CD} + \\vec{BC}$', '$\\vec{AB} + \\vec{BE} + \\vec{EC}$', '$\\vec{AE} + \\vec{ED} + \\vec{DC}$'],
      correctAnswer: 2,
      explanation: ''
    },
    {
      id: '4',
      text: 'In a parallelogram ABCD, the diagonal vectors are $\\vec{AC} = \\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k}$ and $\\vec{BD} = -3\\mathbf{i} + 4\\mathbf{j} - \\mathbf{k}$. Which of the following represents the adjacent side vector $\\vec{AB}$?',
      options: ['$-\\mathbf{i} + 3\\mathbf{j} + \\mathbf{k}$', '$2\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k}$', '$-2\\mathbf{i} + \\mathbf{j} + 4\\mathbf{k}$', '$\\mathbf{i} - 2\\mathbf{j} - 3\\mathbf{k}$'],
      correctAnswer: 0,
      explanation: ''
    },
    {
      id: '5',
      text: 'If two sides of a triangle, taken in the same order, are represented by vectors $2\\mathbf{i} - \\mathbf{j}$ and $3\\mathbf{j} + \\mathbf{k}$, then the length of the third side is:',
      options: ['$\\sqrt{5}$', '$\\sqrt{10}$', '$\\sqrt{14}$', '$\\sqrt{29}$'],
      correctAnswer: 2,
      explanation: ''
    },
    {
      id: '6',
      text: 'If $|\\mathbf{a}| = 1$, $|\\mathbf{b}| = 1$, $\\mathbf{a} \\cdot \\mathbf{b} = 0$, and $\\mathbf{a} + \\mathbf{b} + \\mathbf{c} = \\mathbf{0}$, then $|\\mathbf{c}|$ is equal to:',
      options: ['0', '1', '$\\sqrt{2}$', '2'],
      correctAnswer: 2,
      explanation: ''
    },
    {
      id: '7',
      text: 'Consider a triangle with vertices L(1, 0, -1), M(3, 2, 0), and N(1, 4, -2). What type of triangle is LMN?',
      options: ['Equilateral', 'Isosceles', 'Right-angled', 'Scalene'],
      correctAnswer: 1,
      explanation: ''
    },
    {
      id: '8',
      text: 'A vector $\\mathbf{a}$ lies in the XZ plane, makes an angle of 30º with the positive X-axis, and has a magnitude of 6. The component form of $\\mathbf{a}$ is:',
      options: ['$(3\\sqrt{3}, 0, 3)$', '$(3, 0, 3\\sqrt{3})$', '$(3\\sqrt{3}, 3, 0)$', '$(0, 3, 3\\sqrt{3})$'],
      correctAnswer: 0,
      explanation: ''
    },
    {
      id: '9',
      text: 'Two sides of a parallelogram are $2\\mathbf{i} - \\mathbf{j} + \\mathbf{k}$ and $\\mathbf{i} + 3\\mathbf{j} - \\mathbf{k}$. Which of the following is a unit vector parallel to one of the diagonals?',
      options: ['$\\frac{1}{\\sqrt{11}}(3\\mathbf{i} + 2\\mathbf{j})$', '$\\frac{1}{\\sqrt{13}}(\\mathbf{i} - 4\\mathbf{j} + 2\\mathbf{k})$', '$\\frac{1}{\\sqrt{5}}(\\mathbf{i} + 2\\mathbf{j})$', '$\\frac{1}{\\sqrt{14}}(2\\mathbf{i} + 3\\mathbf{j} - \\mathbf{k})$'],
      correctAnswer: 0,
      explanation: ''
    },
    {
      id: '10',
      text: 'If D, E, F are the mid-points of the sides BC, CA, AB respectively of a triangle ABC, which of the following vector sums is equal to $\\mathbf{0}$?',
      options: ['$\\vec{AD} + \\vec{BE} + \\vec{CF}$', '$\\vec{AB} + \\vec{BC} + \\vec{CA}$', '$\\vec{AF} + \\vec{BD} + \\vec{CE}$', '$\\vec{AE} + \\vec{BF} + \\vec{CD}$'],
      correctAnswer: 0,
      explanation: ''
    },
    {
      id: '11',
      text: 'Find the unit vector parallel to the tangent line to the curve $y = x^2 - 3x$ at the point (3, 0).',
      options: ['$\\frac{1}{\\sqrt{2}}(\\mathbf{i} + \\mathbf{j})$', '$\\frac{1}{\\sqrt{10}}(3\\mathbf{i} + \\mathbf{j})$', '$\\frac{1}{\\sqrt{2}}(-\\mathbf{i} + \\mathbf{j})$', '$\\frac{1}{\\sqrt{5}}(\\mathbf{i} + 2\\mathbf{j})$'],
      correctAnswer: 0,
      explanation: ''
    },
    {
      id: '12',
      text: 'The vector $3\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k}$ can be expressed as a linear combination of $\\mathbf{u} = \\mathbf{i} + \\mathbf{j}$, $\\mathbf{v} = \\mathbf{j} + \\mathbf{k}$, and $\\mathbf{w} = \\mathbf{k} + \\mathbf{i}$ as $x\\mathbf{u} + y\\mathbf{v} + z\\mathbf{w}$. What is the value of $x$?',
      options: ['1', '2', '3', '4'],
      correctAnswer: 0,
      explanation: ''
    },
    {
      id: '13',
      text: 'If $\\vec{OA} = \\mathbf{a}$ and $\\vec{OB} = \\mathbf{b}$, and $\\mathbf{a}$ and $\\mathbf{b}$ are unit vectors, then the vector along the angle bisector of angle AOB is given by:',
      options: ['$\\lambda (\\mathbf{a} + \\mathbf{b})$', '$\\lambda (\\frac{\\mathbf{a}}{|\\mathbf{a}|} - \\frac{\\mathbf{b}}{|\\mathbf{b}|})$', '$\\lambda (\\mathbf{a} - \\mathbf{b})$', '$\\lambda (|\\mathbf{a}|\\mathbf{a} + |\\mathbf{b}|\\mathbf{b})$'],
      correctAnswer: 0,
      explanation: ''
    }
  ]
};

export default vectorsQuiz;