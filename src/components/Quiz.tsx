import React from 'react';
import { useEffect, useMemo } from 'react';
import { useQuizStore } from '../store/quizStore';
import Question from './Question';
import Navigation from './Navigation';
import ProgressBar from './ProgressBar';

// Function to calculate dynamic background color based on progress
const getProgressColor = (currentIndex: number, totalQuestions: number) => {
  const progress = currentIndex / (totalQuestions - 1); // 0 to 1
  
  // Define color stops (RGB values)
  const colors = [
    { r: 250, g: 202, b: 216 }, // #facad8 - Pink start
    { r: 248, g: 212, b: 230 }, // #f8d4e6 - Light pink-purple
    { r: 232, g: 213, b: 242 }, // #e8d5f2 - Light purple
    { r: 212, g: 230, b: 248 }, // #d4e6f8 - Light blue
    { r: 200, g: 240, b: 232 }, // #c8f0e8 - Light mint green
  ];
  
  // Calculate which two colors to interpolate between
  const scaledProgress = progress * (colors.length - 1);
  const colorIndex = Math.floor(scaledProgress);
  const remainder = scaledProgress - colorIndex;
  
  // Handle edge cases
  if (colorIndex >= colors.length - 1) {
    const lastColor = colors[colors.length - 1];
    return `rgb(${lastColor.r}, ${lastColor.g}, ${lastColor.b})`;
  }
  
  // Interpolate between two colors
  const color1 = colors[colorIndex];
  const color2 = colors[colorIndex + 1];
  
  const r = Math.round(color1.r + (color2.r - color1.r) * remainder);
  const g = Math.round(color1.g + (color2.g - color1.g) * remainder);
  const b = Math.round(color1.b + (color2.b - color1.b) * remainder);
  
  return `rgb(${r}, ${g}, ${b})`;
};

// Function to shuffle array while maintaining original mapping
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const Quiz: React.FC = () => {
  const { 
    currentQuestionIndex, 
    questions, 
    answers, 
    selectAnswer,
    nextQuestion,
    prevQuestion
  } = useQuizStore();

  // Memoize shuffled options for each question to maintain consistent order during re-renders
  const shuffledQuestions = useMemo(() => {
    return questions.map(question => ({
      ...question,
      options: shuffleArray(question.options)
    }));
  }, [questions]);

  // Scroll to top when question changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentQuestionIndex]);

  // Update background color when question changes
  useEffect(() => {
    const backgroundColor = getProgressColor(currentQuestionIndex, questions.length);
    document.body.style.backgroundColor = backgroundColor;
    document.body.style.transition = 'background-color 0.8s ease-in-out';
    
    // Cleanup function to reset when component unmounts
    return () => {
      document.body.style.backgroundColor = '';
      document.body.style.transition = '';
    };
  }, [currentQuestionIndex, questions.length]);
  const currentQuestion = shuffledQuestions[currentQuestionIndex];
  const selectedAnswer = answers[currentQuestion.id];
  const isAnswered = selectedAnswer !== undefined;

  if (!currentQuestion) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">Loading question...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <ProgressBar current={currentQuestionIndex + 1} total={questions.length} />
      
      <Question 
        question={currentQuestion}
        selectedAnswer={selectedAnswer}
        onAnswerSelect={(personalityType) => selectAnswer(currentQuestion.id, personalityType)}
        questionNumber={currentQuestionIndex + 1}
        totalQuestions={questions.length}
      />

      <Navigation 
        onPrevious={prevQuestion}
        onNext={nextQuestion}
        canGoPrevious={currentQuestionIndex > 0}
        canGoNext={currentQuestionIndex < questions.length}
        isAnswered={isAnswered}
      />

      <div className="text-center mt-6">
        <button
          onClick={() => {
            const { restartQuiz } = useQuizStore.getState();
            restartQuiz();
          }}
          className="text-sm text-secondary-500 hover:text-primary-600 underline transition-colors"
        >
          start over
        </button>
      </div>
    </div>
  );
};

export default Quiz;