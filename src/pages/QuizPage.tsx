import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Timer, Printer, RotateCcw, CheckCircle, XCircle } from 'lucide-react';
import { getQuizById } from '../data/quiz';
import { Quiz, QuizResult } from '../types';

const QuizPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const quiz = getQuizById(id || '');
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [result, setResult] = useState<QuizResult | null>(null);

  useEffect(() => {
    if (!quiz) {
      navigate('/quizzes');
      return;
    }
    setTimeLeft(quiz.timeLimit * 60);
    setSelectedAnswers(new Array(quiz.questions.length).fill(-1));
  }, [quiz, navigate]);

  useEffect(() => {
    if (!isFinished && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            handleFinish();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft, isFinished]);

  if (!quiz) return null;

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
    if (isFinished) return;
    setSelectedAnswers(prev => {
      const newAnswers = [...prev];
      newAnswers[questionIndex] = answerIndex;
      return newAnswers;
    });
  };

  const handleFinish = () => {
    const score = selectedAnswers.reduce((acc, answer, index) => {
      return acc + (answer === quiz.questions[index].correctAnswer ? 1 : 0);
    }, 0);

    const result: QuizResult = {
      quizId: quiz.id,
      score,
      totalQuestions: quiz.questions.length,
      timeSpent: quiz.timeLimit * 60 - timeLeft,
      answers: selectedAnswers,
      completedAt: new Date().toISOString()
    };

    setResult(result);
    setIsFinished(true);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleRetry = () => {
    setCurrentQuestion(0);
    setSelectedAnswers(new Array(quiz.questions.length).fill(-1));
    setTimeLeft(quiz.timeLimit * 60);
    setIsFinished(false);
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
          {/* Quiz Header */}
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {quiz.title}
            </h1>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-400">
                Subject: {quiz.subject}
              </span>
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <Timer className="h-5 w-5" />
                <span className={`font-mono ${timeLeft < 60 ? 'text-red-500' : ''}`}>
                  {formatTime(timeLeft)}
                </span>
              </div>
            </div>
          </div>

          {!isFinished ? (
            /* Quiz Questions */
            <div className="p-6">
              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Question {currentQuestion + 1} of {quiz.questions.length}
                  </h2>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {selectedAnswers.filter(a => a !== -1).length} answered
                  </span>
                </div>
                
                <p className="text-gray-900 dark:text-white mb-4">
                  {quiz.questions[currentQuestion].text}
                </p>
                
                <div className="space-y-3">
                  {quiz.questions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(currentQuestion, index)}
                      className={`w-full text-left p-4 rounded-lg transition-colors ${
                        selectedAnswers[currentQuestion] === index
                          ? 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300'
                          : 'bg-gray-100 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center mt-6">
                <button
                  onClick={() => setCurrentQuestion(prev => Math.max(0, prev - 1))}
                  disabled={currentQuestion === 0}
                  className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 disabled:opacity-50"
                >
                  Previous
                </button>
                
                {currentQuestion < quiz.questions.length - 1 ? (
                  <button
                    onClick={() => setCurrentQuestion(prev => prev + 1)}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    onClick={handleFinish}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Finish Quiz
                  </button>
                )}
              </div>
            </div>
          ) : (
            /* Quiz Results */
            <div className="p-6">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 mb-4">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Quiz Completed!
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  You scored {result?.score} out of {result?.totalQuestions}
                </p>
              </div>

              <div className="space-y-6">
                {quiz.questions.map((question, index) => (
                  <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-4">
                    <div className="flex items-start space-x-2">
                      {selectedAnswers[index] === question.correctAnswer ? (
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-1" />
                      )}
                      <div>
                        <p className="text-gray-900 dark:text-white font-medium mb-2">
                          {question.text}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          Your answer: {question.options[selectedAnswers[index]]}
                        </p>
                        <p className="text-sm text-green-600 dark:text-green-400 mb-2">
                          Correct answer: {question.options[question.correctAnswer]}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                          {question.explanation}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center space-x-4 mt-8">
                <button
                  onClick={handlePrint}
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  <Printer className="h-5 w-5" />
                  <span>Print Results</span>
                </button>
                <button
                  onClick={handleRetry}
                  className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  <RotateCcw className="h-5 w-5" />
                  <span>Try Again</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizPage;