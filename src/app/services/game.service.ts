import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IQuestion } from '../types/IQuestion';
import { GameState } from '../types/GameState';
import { Difficulty } from '../types/Difficulty';
import { QuestionsService } from './questions.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private currentQuestionIndexSubject = new BehaviorSubject<number>(0);
  private gameStateSubject = new BehaviorSubject<GameState>(GameState.PLAYING);
  private selectedQuestionsSubject = new BehaviorSubject<IQuestion[]>([]);

  currentQuestionIndex$: Observable<number> = this.currentQuestionIndexSubject.asObservable();
  gameState$: Observable<GameState> = this.gameStateSubject.asObservable();
  selectedQuestions$: Observable<IQuestion[]> = this.selectedQuestionsSubject.asObservable();

  constructor(private questionsService: QuestionsService) { }

  startNewGame(): void {
    const questions = this.selectQuestions();
    this.selectedQuestionsSubject.next(questions);
    this.currentQuestionIndexSubject.next(0);
    this.gameStateSubject.next(GameState.PLAYING);
  }

  private selectQuestions(): IQuestion[] {
    const selected: IQuestion[] = [];
    
    // Seleccionar preguntas por dificultad
    const difficulties = [
      { diff: Difficulty.EASY, count: 5 },
      { diff: Difficulty.MEDIUM_EASY, count: 5 },
      { diff: Difficulty.MEDIUM, count: 3 },
      { diff: Difficulty.HARD, count: 1 },
      { diff: Difficulty.VERY_HARD, count: 1 }
    ];

    difficulties.forEach(({ diff, count }) => {
      const questions = this.questionsService.getQuestionsByDifficulty(diff);
      const shuffled = this.shuffleArray([...questions]);
      selected.push(...shuffled.slice(0, count));
    });

    return selected;
  }

  private shuffleArray<T>(array: T[]): T[] {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }

  answerQuestion(isCorrect: boolean): void {
    if (!isCorrect) {
      this.gameStateSubject.next(GameState.LOST);
      return;
    }

    const currentIndex = this.currentQuestionIndexSubject.value;
    const totalQuestions = this.selectedQuestionsSubject.value.length;

    if (currentIndex >= totalQuestions - 1) {
      this.gameStateSubject.next(GameState.WON);
    } else {
      this.currentQuestionIndexSubject.next(currentIndex + 1);
    }
  }

  getCurrentQuestion(): IQuestion | null {
    const questions = this.selectedQuestionsSubject.value;
    const index = this.currentQuestionIndexSubject.value;
    return questions[index] || null;
  }

  getCurrentQuestionIndex(): number {
    return this.currentQuestionIndexSubject.value;
  }

  getGameState(): GameState {
    return this.gameStateSubject.value;
  }

  resetGame(): void {
    this.currentQuestionIndexSubject.next(0);
    this.gameStateSubject.next(GameState.PLAYING);
    this.selectedQuestionsSubject.next([]);
  }
}
