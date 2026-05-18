import { Injectable } from '@angular/core';
import { IQuestion } from '../types/IQuestion';
import { euskalQuestions } from '../content/euskal-questions';
import { Difficulty } from '../types/Difficulty';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  private questions: IQuestion[] = euskalQuestions;

  constructor() { }

  getQuestionsByDifficulty(difficulty: Difficulty): IQuestion[] {
    return this.questions.filter(q => q.difficulty === difficulty);
  }

  getAllQuestions(): IQuestion[] {
    return this.questions;
  }
}
