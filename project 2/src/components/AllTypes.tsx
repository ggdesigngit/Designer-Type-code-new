import React from 'react';
import { useEffect } from 'react';
import { personalityTypes } from '../data/personalityTypes';
import { useQuizStore } from '../store/quizStore';
import { ArrowLeft, Download } from 'lucide-react';
import EmailCollector from './EmailCollector';

interface AllTypesProps {
  onBack: () => void;
}

const AllTypes: React.FC<AllTypesProps> = ({ onBack }) => {
  const { setSpecificResult, setCurrentView } = useQuizStore();
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const handleTypeClick = (typeId: string) => {
    setSpecificResult(typeId);
    setCurrentView('result');
  };
  
  return (
    <div className="max-w-7xl mx-auto animate-fade-in">
      <div className="mb-8">
        <button
          onClick={onBack}
          className="btn-secondary inline-flex items-center mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Results
        </button>
        
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-secondary-800 mb-4">
            All 8 Designer Types
          </h1>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            Discover the complete spectrum of designer personalities. Each type brings unique strengths and approaches to the creative process.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {personalityTypes.map((type) => (
          <div 
            key={type.id} 
            className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer rounded-2xl"
            onClick={() => handleTypeClick(type.id)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleTypeClick(type.id);
              }
            }}
          >
            <img 
              src={type.imageUrl} 
              alt={type.name} 
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12 p-8 bg-gradient-to-br from-secondary-50 to-primary-50 rounded-xl">
        <EmailCollector />
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onBack}
            className="btn-secondary mt-6"
          >
            Return to Results
          </button>
          <button
            onClick={() => {
             // Reset quiz state and go to intro
             const { restartQuiz } = useQuizStore.getState();
             restartQuiz();
            }}
            className="btn-secondary mt-6"
          >
           Retake Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllTypes;