import React from 'react';
import { useQuizStore } from './store/quizStore';
import Intro from './components/Intro';
import Quiz from './components/Quiz';
import Result from './components/Result';
import AllTypes from './components/AllTypes';
import TeachersGuide from './components/TeachersGuide';
import Header from './components/Header';

function App() {
  const { currentView, startQuiz, setCurrentView } = useQuizStore();

  return (
    <div className={`min-h-screen ${currentView === 'intro' ? 'bg-[#facad8]' : currentView === 'quiz' ? '' : 'bg-custom-bg'}`}>
      {currentView !== 'intro' && <Header />}
      <main className="container mx-auto px-4 py-8">
        {currentView === 'intro' && <Intro onStart={startQuiz} onTeachersGuide={() => setCurrentView('teachersGuide')} onViewAllTypes={() => setCurrentView('allTypes')} />}
        {currentView === 'quiz' && <Quiz />}
        {currentView === 'result' && <Result onViewAllTypes={() => setCurrentView('allTypes')} />}
        {currentView === 'allTypes' && <AllTypes onBack={() => setCurrentView('result')} />}
        {currentView === 'teachersGuide' && <TeachersGuide onBack={() => setCurrentView('intro')} />}
      </main>
    </div>
  );
}

export default App;