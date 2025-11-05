import React from 'react';
import { Question as QuestionType } from '../types';
import Option from './Option';

interface QuestionProps {
  question: QuestionType;
  selectedAnswer: string | undefined;
  onAnswerSelect: (personalityType: string) => void;
  questionNumber: number;
  totalQuestions: number;
}

const Question: React.FC<QuestionProps> = ({
  question,
  selectedAnswer,
  onAnswerSelect,
  questionNumber,
  totalQuestions
}) => {
  return (
    <div className="animate-fade-in">
      {/* Sticky Question Header */}
      <div className="sticky top-16 z-40 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-200 mb-8">
        <div className="card p-6 lg:p-8 mx-0 rounded-none border-0 shadow-none bg-transparent">
          <div className="text-center">
            <div className="text-sm font-medium text-primary-600 mb-2">
              Question {questionNumber} of {totalQuestions}
            </div>
            <h2 className="text-xl lg:text-2xl font-serif font-bold text-secondary-800">
              {question.text}
            </h2>
          </div>
        </div>
      </div>
      
      {/* Answer Options */}
      <div className="card p-8 lg:p-12">
        <div className="grid gap-4 md:gap-6">
          {question.options.map((option) => (
            <Option
              key={option.id}
              option={option}
              isSelected={selectedAnswer === option.personalityType}
              onClick={() => onAnswerSelect(option.personalityType)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Question;