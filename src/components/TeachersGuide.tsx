import React from 'react';
import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

interface TeachersGuideProps {
  onBack: () => void;
}

const TeachersGuide: React.FC<TeachersGuideProps> = ({ onBack }) => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="mb-8">
        <button
          onClick={onBack}
          className="btn-secondary inline-flex items-center mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </button>
      </div>

      <div className="card p-8 lg:p-12">
        <h1 className="text-4xl lg:text-5xl font-serif font-bold text-secondary-800 text-center mb-8">
          Guide for Teachers and Facilitators
        </h1>
        
        {/* Eye-catching quote */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl p-8 mb-12 shadow-lg">
          <blockquote className="text-xl lg:text-2xl font-medium leading-relaxed mb-6 text-center italic">
            "Anyone can learn design, but not everyone needs to become a professional designer. We created What's Your Design Type to honor the efforts of folks learning design and provide a fun identity in the world of design beyond professional job titles. Use the Designer Type cards to integrate Design into your work and life by taking ownership of your education, and spending time exploring your passions and interest."
          </blockquote>
          <div className="text-center">
            <cite className="text-lg font-semibold not-italic text-primary-100">
              – Gray Garmon<br />Director of the Center for Integrated Design (and Design Guardian)
            </cite>
          </div>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-serif font-semibold text-secondary-800 mb-4">
            Overview
          </h2>
          <p className="text-lg text-secondary-600 mb-8">
            "What's your Designer Type" is a fun and thoughtful quiz to help you integrate design into your work and life. There are many ways to engage with design and integrate it into the way you work. You can use this exercise with your teams, your students, or your friends as an icebreaker and reflection tool.
          </p>
          
          <h2 className="text-2xl font-serif font-semibold text-secondary-800 mb-4">
            Objectives
          </h2>
          <p className="text-lg text-secondary-600 mb-8">
            The "What's your Designer Type" quiz will help people reflect on their skills and strengths to align around a design persona. These "Designer Types" can help people define and guide their interests within the larger discipline of Design.
          </p>
          
          {/* Activities Section with Visual Differentiation */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 sm:p-6 lg:p-8 mb-8 sm:mb-12 border-l-4 border-[#66ccff] shadow-sm">
            <h2 className="text-xl sm:text-2xl font-serif font-semibold text-secondary-800 mb-4 sm:mb-6 flex items-start sm:items-center">
              <span className="bg-[#66ccff] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">!</span>
              <span>Activities</span>
            </h2>
            
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-blue-200">
                <h3 className="text-lg sm:text-xl font-serif font-semibold text-secondary-800 mb-3 sm:mb-4 text-[#4da6d9]">
                  Group Reflection Activity
                </h3>
                <p className="text-base sm:text-lg text-secondary-600 mb-3 sm:mb-4">
                  The "What's your Designer Type" quiz can be used to help a group reflect on what they might have learned about themselves and what they might learn about each other.
                </p>
                <p className="text-base sm:text-lg text-secondary-600 mb-3 sm:mb-4">
                  The facilitator can ask questions such as:
                </p>
                <ul className="list-disc list-inside text-sm sm:text-base lg:text-lg text-secondary-600 mb-3 sm:mb-4 space-y-1 sm:space-y-2 ml-2 sm:ml-4 bg-blue-50 p-3 sm:p-4 rounded-lg">
                  <li>"How accurate is your Designer Type? Why or why not?"</li>
                  <li>"How do the Designer Types on your team support each other?"</li>
                  <li>"What is a missing Designer Type that might be helpful for your team?"</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-blue-200">
                <h3 className="text-lg sm:text-xl font-serif font-semibold text-secondary-800 mb-3 sm:mb-4 text-[#4da6d9]">
                  How to form teams using What's Your Designer Type
                </h3>
                <p className="text-base sm:text-lg text-secondary-600 mb-3 sm:mb-4">
                  After everyone has completed the Designer Type quiz and group reflection activity:
                </p>
                <ul className="list-disc list-inside text-sm sm:text-base lg:text-lg text-secondary-600 mb-3 sm:mb-4 space-y-1 sm:space-y-2 ml-2 sm:ml-4 bg-blue-50 p-3 sm:p-4 rounded-lg">
                  <li>Have the group form teams with different Designer Types on each team (with as much variety as possible). teams should be at least 3 and not more than 8.</li>
                  <li>Once teams are formed, have the teammates share their Designer Types and reflect on their strengths and challenges of their Designer Types as a collective.</li>
                  <li>Finally, Have the team create a team name that represents them. (make it fun)</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-blue-200">
                <h3 className="text-lg sm:text-xl font-serif font-semibold text-secondary-800 mb-3 sm:mb-4 text-[#4da6d9]">
                  Activity if you've already formed teams
                </h3>
                <p className="text-base sm:text-lg text-secondary-600 mb-3 sm:mb-4">
                  If you already have teams formed, use the Designer Type cards as an opportunity to reflect and build connection among teammates.
                </p>
                <ul className="list-disc list-inside text-sm sm:text-base lg:text-lg text-secondary-600 mb-3 sm:mb-4 space-y-1 sm:space-y-2 ml-2 sm:ml-4 bg-blue-50 p-3 sm:p-4 rounded-lg">
                  <li>Each teammate should share their Designer Type and reflect on the strengths and challenges they might face.</li>
                  <li>Have the whole team discuss which Designer Types might be missing from their team, and if there is anything they wish to do as a team to respond to the gap.</li>
                  <li>Have the team create a team name that represents them. (make it fun)</li>
                </ul>
              </div>
            </div>
          </div>
          
          <h2 className="text-2xl font-serif font-semibold text-secondary-800 mb-4">
            Acknowledgments
          </h2>
          <p className="text-lg text-secondary-600 mb-4">
            What's Your Designer Type quiz was created by Gray Garmon, Design Professor and Director of the Center for Integrated Design, and Design MFA student, Christoph Sokol in 2020. The iteration of the quiz was card game that was imagined as a way to help students understand how to best integrate design into their discipline. It also serves as a tool to understand design and the many roles a designer can take on.
          </p>
          <p className="text-lg text-secondary-600 mb-4">
            What's Your Designer Type quiz has been created by <a href="https://www.graygarmon.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline">Gray Garmon</a>, Design Professor and Director of the Center for Integrated Design, and Design MFA student, Christoph Sokol in 2020. The iteration of the quiz was card game that was imagined as a way to help students understand how to best integrate design into their discipline. It also serves as a tool to understand design and the many roles a designer can take on.
          </p>
          <p className="text-lg text-secondary-600 mb-4">
            The Center for Integrated Design is a part of the School of Design and Creative Technologies at the University of Texas at Austin.
          </p>
          <p className="text-lg text-secondary-600 mb-6">
            To find out more go to: <a href="https://www.centerforintegrateddesign.com" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline">www.centerforintegrateddesign.com</a>
          </p>
          
          <div className="bg-gradient-to-br from-secondary-50 to-primary-50 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-serif font-semibold text-secondary-800 mb-4">
              Ready to get started?
            </h2>
            <p className="text-secondary-600 mb-6">
              We hope you enjoy the quiz and learn something new about yourself and your team, you're ready start exploring the quiz.
            </p>
            <button
              onClick={onBack}
              className="btn-primary"
            >
              Return to Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeachersGuide;