import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NavigationProps {
  onPrevious: () => void;
  onNext: () => void;
  canGoPrevious: boolean;
  canGoNext: boolean;
  isAnswered: boolean;
}

const Navigation: React.FC<NavigationProps> = ({
  onPrevious,
  onNext,
  canGoPrevious,
  canGoNext,
  isAnswered
}) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-4">
      <button
        onClick={onPrevious}
        disabled={!canGoPrevious}
        className="btn-secondary inline-flex items-center order-2 sm:order-none"
      >
        <ChevronLeft className="mr-2 h-4 w-4" />
        Previous
      </button>

      <div className="flex items-center justify-center space-x-2 order-3 sm:order-none">
        <span className="text-secondary-500 text-sm">
          {isAnswered ? (
            <span className="flex items-center text-primary-600 font-medium">
              <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse mr-2" />
              Ready to continue
            </span>
          ) : (
            'Select an answer to continue'
          )}
        </span>
      </div>

      <button
        onClick={onNext}
        disabled={!canGoNext || !isAnswered}
        className={`inline-flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 order-1 sm:order-none ${
          isAnswered 
            ? 'bg-primary-600 text-white hover:bg-primary-700 hover:scale-105 shadow-md' 
            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
        }`}
      >
        Next
        <ChevronRight className="ml-2 h-4 w-4" />
      </button>
    </div>
  );
};

export default Navigation;