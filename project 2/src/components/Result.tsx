import React from 'react';
import { useEffect } from 'react';
import { useQuizStore } from '../store/quizStore';
import { personalityTypes } from '../data/personalityTypes';
import { RotateCcw, Users, Download } from 'lucide-react';
import EmailCollector from './EmailCollector';

interface ResultProps {
  onViewAllTypes: () => void;
}

const Result: React.FC<ResultProps> = ({ onViewAllTypes }) => {
  const { getPersonalityResult, getSecondPersonalityResult, restartQuiz, setSpecificResult } = useQuizStore();
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const result = getPersonalityResult();
  const secondResult = getSecondPersonalityResult();
  const personalityType = personalityTypes.find(type => type.id === result);
  const secondPersonalityType = personalityTypes.find(type => type.id === secondResult);

  const downloadResult = () => {
    if (!personalityType) return;
    
    try {
      // Create a canvas to ensure proper image format for download
      const img = new Image();
      img.crossOrigin = 'anonymous';
      
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        
        if (ctx) {
          ctx.drawImage(img, 0, 0);
          
          // Convert to blob and download
          canvas.toBlob((blob) => {
            if (blob) {
              const url = URL.createObjectURL(blob);
              const link = document.createElement('a');
              link.href = url;
              link.download = `${personalityType.name.replace(/\s+/g, '-').toLowerCase()}-designer-type.png`;
              
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
              
              // Clean up the blob URL
              URL.revokeObjectURL(url);
            }
          }, 'image/png');
        }
      };
      
      img.onerror = () => {
        // Fallback: direct download
        const link = document.createElement('a');
        link.href = personalityType.imageUrl;
        link.download = `${personalityType.name.replace(/\s+/g, '-').toLowerCase()}-designer-type.png`;
        link.target = '_blank';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
      
      img.src = personalityType.imageUrl;
      
    } catch (error) {
      console.error('Error downloading image:', error);
      // Final fallback: open image in new tab
      window.open(personalityType.imageUrl, '_blank');
    }
  };

  // Alternative simple download function
  const downloadResultSimple = () => {
    if (!personalityType) return;
    
    // Simple approach: fetch and download as blob
    fetch(personalityType.imageUrl)
      .then(response => response.blob())
      .then(blob => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${personalityType.name.replace(/\s+/g, '-').toLowerCase()}-designer-type.png`;
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        URL.revokeObjectURL(url);
      })
      .catch(error => {
        console.error('Download failed:', error);
        const link = document.createElement('a');
        link.href = personalityType.imageUrl;
        link.download = `${personalityType.name.replace(/\s+/g, '-').toLowerCase()}-designer-type.png`;
        link.target = '_blank';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
  };

  if (!personalityType) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">Unable to determine personality type. Please retake the quiz.</p>
        <button 
          onClick={restartQuiz}
          className="mt-4 bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
        >
          Retake Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Result Content */}
        <div className="p-8">
          <div className="text-center mb-8">
            <div className="w-full max-w-sm mx-auto mb-6 px-4 sm:px-0">
              <img 
                src={personalityType.imageUrl} 
                alt={personalityType.name}
                className="w-full h-auto object-contain drop-shadow-lg"
              />
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {personalityType.name}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {personalityType.description}
            </p>
          </div>

          {/* Traits */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
              Your Key Traits
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {personalityType.traits.map((trait, index) => (
                <div 
                  key={index}
                  className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center"
                >
                  <h4 className="text-blue-700 font-semibold text-lg mb-2">
                    {trait.name}
                  </h4>
                  <p className="text-blue-600 text-sm">
                    {trait.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Second Personality Type */}
          {secondPersonalityType && secondPersonalityType.id !== personalityType?.id && (
            <div 
              className="mb-8 p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 cursor-pointer hover:shadow-md transition-all duration-200 hover:scale-[1.02]"
              onClick={() => {
                setSpecificResult(secondPersonalityType.id);
               window.scrollTo(0, 0);
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSpecificResult(secondPersonalityType.id);
                 window.scrollTo(0, 0);
                }
              }}
            >
              <h3 className="text-xl font-semibold text-gray-700 mb-3 text-center">
                Your Secondary Designer Type (Click to view details)
              </h3>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="w-24 h-24 flex-shrink-0">
                  <img 
                    src={secondPersonalityType.imageUrl} 
                    alt={secondPersonalityType.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    {secondPersonalityType.name}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    You also show strong tendencies toward being a {secondPersonalityType.name}. 
                    This secondary type represents another significant aspect of your design approach. Click to explore this type in detail.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex justify-center">
            <button
              onClick={restartQuiz}
              className="flex items-center gap-2 bg-secondary-600 text-white px-6 py-3 rounded-lg hover:bg-secondary-700 transition-colors font-medium"
            >
              <RotateCcw className="w-5 h-5" />
              Return to Homepage
            </button>
          </div>

          {/* Download PDF Section */}
          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <EmailCollector designerType={personalityType?.name} />
          </div>

          {/* View All Types Button */}
          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <button
              onClick={onViewAllTypes}
              className="flex items-center gap-2 bg-accent-600 text-white px-6 py-3 rounded-lg hover:bg-accent-700 transition-colors font-medium mx-auto"
            >
              <Users className="w-5 h-5" />
              See all 8 Designer Types
            </button>
          </div>

          {/* Teachers Guide Section */}
          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <h3 className="text-lg font-serif font-medium text-secondary-700 mb-3">
              What some activities for how to use your Designer Types on a team?
            </h3>
            <p className="text-secondary-500 text-sm mb-4 max-w-2xl mx-auto">
              Now that you have your designer type, there are several fun ways to reflect as a group.
            </p>
            <a
              href="#"
              onClick={() => {
                const { setCurrentView } = useQuizStore.getState();
                setCurrentView('teachersGuide');
              }}
              className="text-secondary-600 hover:text-primary-600 text-sm underline transition-colors cursor-pointer"
            >
              View Guide for Teachers, Facilitators, and Teams
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;