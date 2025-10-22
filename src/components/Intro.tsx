import React from 'react';
import { ArrowRight } from 'lucide-react';

interface IntroProps {
  onStart: () => void;
  onTeachersGuide: () => void;
  onViewAllTypes: () => void;
}

const Intro: React.FC<IntroProps> = ({ onStart, onTeachersGuide, onViewAllTypes }) => {
  return (
    <div className="animate-fade-in -mx-4 -mt-8">
      {/* Hero Image at the very top */}
      <div className="w-full mb-8">
        <img 
          src="https://raw.githubusercontent.com/ggdesigngit/Whats-Your-Designer-Type/c4c42f04b440ff355a0567d3c8956e3f298c7300/External_Whats%20Your%20Designer%20Type_updated%20cover.jpg"
          alt="Designer Type Quiz" 
          className="w-full h-auto object-cover"
          loading="eager"
        />
      </div>
      
      <div className="max-w-4xl mx-auto px-4">
        <div className="card p-8 lg:p-12">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-secondary-800 text-center mb-6">
            Discover Your Designer Type
          </h1>
          
          <p className="text-lg text-secondary-600 mb-6 text-center max-w-3xl mx-auto">
            This quiz is a fun, thoughtful way to explore how design shows up in your work and life—even if you're not a traditional designer.
          </p>
          
          <div className="bg-gradient-to-br from-secondary-50 to-primary-50 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-serif font-semibold text-secondary-800 mb-4">
              How to Take the Quiz
            </h2>
            <ul className="space-y-3 text-secondary-700">
              <li className="flex items-start">
                <span className="bg-primary-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5 flex-shrink-0">1</span>
                Take your time with each question—there are 11 in total.
              </li>
              <li className="flex items-start">
                <span className="bg-primary-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5 flex-shrink-0">2</span>
                Choose the response that feels most natural to you.
              </li>
              <li className="flex items-start">
                <span className="bg-primary-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5 flex-shrink-0">3</span>
                Consider how you actually behave, not how you'd like to behave.
              </li>
              <li className="flex items-start">
                <span className="bg-primary-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5 flex-shrink-0">4</span>
                You can navigate back to review and change your answers.
              </li>
            </ul>
          </div>
          
          <div className="text-center">
            <button
              onClick={onStart}
              className="btn-primary text-lg px-8 py-4 inline-flex items-center"
            >
              Start the Quiz
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
          
          {/* Teachers Guide Link */}
          <div className="text-center mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={onTeachersGuide}
              className="text-secondary-600 hover:text-primary-600 text-sm font-medium underline transition-colors"
            >
              Guide for Teachers and Facilitators
            </button>
            <br />
            <button
              onClick={onViewAllTypes}
              className="text-secondary-600 hover:text-primary-600 text-sm font-medium underline transition-colors mt-2"
            >
              See All 8 Designer Types
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;