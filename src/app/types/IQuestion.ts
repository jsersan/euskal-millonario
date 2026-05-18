import { Difficulty } from './Difficulty';

export interface IQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  difficulty: Difficulty;
}
