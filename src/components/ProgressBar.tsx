import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  return (
    <div className="w-full mb-6 sm:mb-8">
      <div className="flex items-center justify-center max-w-6xl mx-auto px-2 sm:px-4">
        {/* Mobile: Show only first 3, current, and last 3 dots if more than 7 questions */}
        <div className="flex items-center justify-center w-full">
          {total <= 7 ? (
            // Show all dots if 7 or fewer questions
            Array.from({ length: total }, (_, index) => {
              const questionNumber = index + 1;
              const isCompleted = questionNumber < current;
              const isCurrent = questionNumber === current;
              
              return (
                <div key={index} className="flex items-center">
                  {/* Dot */}
                  <div className="relative flex items-center justify-center">
                    <div
                      className={`
                        w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center text-xs font-semibold transition-all duration-500 ease-out
                        ${isCompleted 
                          ? 'bg-primary-500 border-primary-500 text-white scale-110' 
                          : isCurrent 
                            ? 'bg-white border-primary-500 text-primary-600 scale-125 shadow-lg ring-2 sm:ring-4 ring-primary-200' 
                            : 'bg-gray-100 border-gray-300 text-gray-400'
                        }
                      `}
                    >
                      {isCompleted ? (
                        <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <span className="text-xs sm:text-sm">{questionNumber}</span>
                      )}
                    </div>
                    
                    {/* Pulse animation for current question */}
                    {isCurrent && (
                      <div className="absolute inset-0 rounded-full border-2 border-primary-300 animate-ping opacity-75"></div>
                    )}
                  </div>
                  
                  {/* Connecting line */}
                  {index < total - 1 && (
                    <div className="relative">
                      <div className="w-6 sm:w-8 md:w-12 h-0.5 bg-gray-200 mx-1 sm:mx-2"></div>
                      <div 
                        className={`
                          absolute top-0 left-1 sm:left-2 h-0.5 bg-primary-500 transition-all duration-700 ease-out
                          ${isCompleted ? 'w-6 sm:w-8 md:w-12' : 'w-0'}
                        `}
                      ></div>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            // Condensed view for more than 7 questions
            <>
              {/* First 2 dots */}
              {Array.from({ length: Math.min(2, total) }, (_, index) => {
                const questionNumber = index + 1;
                const isCompleted = questionNumber < current;
                const isCurrent = questionNumber === current;
                
                return (
                  <div key={index} className="flex items-center">
                    <div className="relative flex items-center justify-center">
                      <div
                        className={`
                          w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center text-xs font-semibold transition-all duration-500 ease-out
                          ${isCompleted 
                            ? 'bg-primary-500 border-primary-500 text-white scale-110' 
                            : isCurrent 
                              ? 'bg-white border-primary-500 text-primary-600 scale-125 shadow-lg ring-2 sm:ring-4 ring-primary-200' 
                              : 'bg-gray-100 border-gray-300 text-gray-400'
                          }
                        `}
                      >
                        {isCompleted ? (
                          <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <span className="text-xs sm:text-sm">{questionNumber}</span>
                        )}
                      </div>
                      {isCurrent && (
                        <div className="absolute inset-0 rounded-full border-2 border-primary-300 animate-ping opacity-75"></div>
                      )}
                    </div>
                    <div className="relative">
                      <div className="w-4 sm:w-6 h-0.5 bg-gray-200 mx-1"></div>
                      <div 
                        className={`
                          absolute top-0 left-1 h-0.5 bg-primary-500 transition-all duration-700 ease-out
                          ${isCompleted ? 'w-4 sm:w-6' : 'w-0'}
                        `}
                      ></div>
                    </div>
                  </div>
                );
              })}
              
              {/* Dots indicator if we're not near the beginning or end */}
              {current > 3 && current < total - 2 && (
                <div className="flex items-center mx-1 sm:mx-2">
                  <div className="flex space-x-1">
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  </div>
                </div>
              )}
              
              {/* Current question area (if not in first 2 or last 2) */}
              {current > 2 && current < total - 1 && (
                <div className="flex items-center">
                  <div className="relative">
                    <div className="w-4 sm:w-6 h-0.5 bg-primary-500 mx-1"></div>
                  </div>
                  <div className="relative flex items-center justify-center">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 bg-white border-primary-500 text-primary-600 scale-125 shadow-lg ring-2 sm:ring-4 ring-primary-200 flex items-center justify-center text-xs font-semibold">
                      <span className="text-xs sm:text-sm">{current}</span>
                    </div>
                    <div className="absolute inset-0 rounded-full border-2 border-primary-300 animate-ping opacity-75"></div>
                  </div>
                  <div className="relative">
                    <div className="w-4 sm:w-6 h-0.5 bg-gray-200 mx-1"></div>
                  </div>
                </div>
              )}
              
              {/* More dots if needed */}
              {current < total - 2 && (
                <div className="flex items-center mx-1 sm:mx-2">
                  <div className="flex space-x-1">
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  </div>
                </div>
              )}
              
              {/* Last 2 dots */}
              {Array.from({ length: Math.min(2, total) }, (_, index) => {
                const questionNumber = total - 1 + index;
                const isCompleted = questionNumber < current;
                const isCurrent = questionNumber === current;
                
                return (
                  <div key={`last-${index}`} className="flex items-center">
                    {index === 0 && (
                      <div className="relative">
                        <div className="w-4 sm:w-6 h-0.5 bg-gray-200 mx-1"></div>
                        <div 
                          className={`
                            absolute top-0 left-1 h-0.5 bg-primary-500 transition-all duration-700 ease-out
                            ${questionNumber - 1 < current ? 'w-4 sm:w-6' : 'w-0'}
                          `}
                        ></div>
                      </div>
                    )}
                    <div className="relative flex items-center justify-center">
                      <div
                        className={`
                          w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center text-xs font-semibold transition-all duration-500 ease-out
                          ${isCompleted 
                            ? 'bg-primary-500 border-primary-500 text-white scale-110' 
                            : isCurrent 
                              ? 'bg-white border-primary-500 text-primary-600 scale-125 shadow-lg ring-2 sm:ring-4 ring-primary-200' 
                              : 'bg-gray-100 border-gray-300 text-gray-400'
                          }
                        `}
                      >
                        {isCompleted ? (
                          <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <span className="text-xs sm:text-sm">{questionNumber}</span>
                        )}
                      </div>
                      {isCurrent && (
                        <div className="absolute inset-0 rounded-full border-2 border-primary-300 animate-ping opacity-75"></div>
                      )}
                    </div>
                    {index === 0 && (
                      <div className="relative">
                        <div className="w-4 sm:w-6 h-0.5 bg-gray-200 mx-1"></div>
                        <div 
                          className={`
                            absolute top-0 left-1 h-0.5 bg-primary-500 transition-all duration-700 ease-out
                            ${isCompleted ? 'w-4 sm:w-6' : 'w-0'}
                          `}
                        ></div>
                      </div>
                    )}
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;