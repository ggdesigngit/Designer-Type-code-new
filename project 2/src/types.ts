export interface Option {
  id: string;
  text: string;
  personalityType: string;
}

export interface Question {
  id: number;
  text: string;
  options: Option[];
}

export interface PersonalityType {
  id: string;
  name: string;
  description: string;
  traits: { name: string; description: string }[];
  imageUrl: string;
}

export interface QuizState {
  currentQuestionIndex: number;
  answers: Record<number, string>;
  quizCompleted: boolean;
  result: string | null;
}