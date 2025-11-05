import { create } from 'zustand';
import { questions } from '../data/questions';
import { personalityTypes } from '../data/personalityTypes';
import { QuizState } from '../types';

interface QuizStore extends QuizState {
  currentView: 'intro' | 'quiz' | 'result' | 'allTypes' | 'teachersGuide';
  questions: typeof questions;
  secondResult: string | null;
  selectAnswer: (questionId: number, personalityType: string) => void;
  nextQuestion: () => void;
  prevQuestion: () => void;
  calculateResult: () => void;
  restartQuiz: () => void;
  startQuiz: () => void;
  setCurrentView: (view: 'intro' | 'quiz' | 'result' | 'allTypes' | 'teachersGuide') => void;
  getPersonalityResult: () => string | null;
  getSecondPersonalityResult: () => string | null;
  isQuizComplete: () => boolean;
  setSpecificResult: (personalityType: string) => void;
}

export const useQuizStore = create<QuizStore>((set, get) => ({
  currentQuestionIndex: 0,
  answers: {},
  quizCompleted: false,
  result: null,
  secondResult: null,
  currentView: 'intro',
  questions,

  selectAnswer: (questionId, personalityType) => {
    set((state) => ({
      answers: {
        ...state.answers,
        [questionId]: personalityType
      }
    }));
  },

  nextQuestion: () => {
    set((state) => {
      if (state.currentQuestionIndex < questions.length - 1) {
        return { currentQuestionIndex: state.currentQuestionIndex + 1 };
      } else {
        get().calculateResult();
        return { quizCompleted: true, currentView: 'result' };
      }
    });
  },

  prevQuestion: () => {
    set((state) => ({
      currentQuestionIndex: Math.max(0, state.currentQuestionIndex - 1)
    }));
  },

  calculateResult: () => {
    const { answers } = get();
    
    // Count occurrences of each personality type
    const counts: Record<string, number> = {};
    
    Object.values(answers).forEach(personalityType => {
      counts[personalityType] = (counts[personalityType] || 0) + 1;
    });
    
    // Sort personality types by count (descending)
    const sortedTypes = Object.entries(counts).sort(([,a], [,b]) => b - a);
    
    const result = sortedTypes.length > 0 ? sortedTypes[0][0] : null;
    const secondResult = sortedTypes.length > 1 ? sortedTypes[1][0] : null;
    
    set({ result, secondResult });
  },

  restartQuiz: () => {
    set({
      currentQuestionIndex: 0,
      answers: {},
      quizCompleted: false,
      result: null,
      secondResult: null,
      currentView: 'intro'
    });
  },

  startQuiz: () => {
    set({ currentView: 'quiz' });
    // Scroll to top when starting quiz
    window.scrollTo(0, 0);
  },

  setCurrentView: (view) => {
    set({ currentView: view });
    // Scroll to top when changing views
    window.scrollTo(0, 0);
  },

  getPersonalityResult: () => {
    return get().result;
  },

  getSecondPersonalityResult: () => {
    return get().secondResult;
  },

  isQuizComplete: () => {
    const { answers } = get();
    return Object.keys(answers).length === questions.length;
  },

  setSpecificResult: (personalityType) => {
    set({ result: personalityType });
  }
}));