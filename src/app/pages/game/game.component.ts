import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GameService } from '../../services/game.service';
import { AudioService } from '../../services/audio.service';
import { IQuestion } from '../../types/IQuestion';
import { GameState } from '../../types/GameState';
import { prices } from '../../content/prices';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, OnDestroy {
  currentQuestion: IQuestion | null = null;
  currentQuestionIndex: number = 0;
  gameState: GameState = GameState.PLAYING;
  prices = prices;
  selectedAnswer: number | null = null;
  showResult: boolean = false;
  isCorrect: boolean = false;
  
  // Comodines
  fiftyFiftyUsed: boolean = false;
  phoneCallUsed: boolean = false;
  hiddenOptions: number[] = [];

  GameState = GameState;

  private subscriptions: Subscription[] = [];

  constructor(
    private gameService: GameService,
    private audioService: AudioService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.gameService.startNewGame();
    this.loadCurrentQuestion();
    this.updateBackgroundMusic();

    // Reproducir "Let's play" al iniciar
    setTimeout(() => {
      this.audioService.play('lets-play');
    }, 500);

    this.subscriptions.push(
      this.gameService.currentQuestionIndex$.subscribe(index => {
        this.currentQuestionIndex = index;
        this.updateBackgroundMusic();
      })
    );

    this.subscriptions.push(
      this.gameService.gameState$.subscribe(state => {
        this.gameState = state;
        if (state !== GameState.PLAYING) {
          this.audioService.stopBackgroundMusic();
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
    this.audioService.stopBackgroundMusic();
  }

  private updateBackgroundMusic(): void {
    const index = this.currentQuestionIndex;
    
    // Música según la dificultad de la pregunta
    if (index < 5) {
      this.audioService.playBackgroundMusic('easy');
    } else if (index < 10) {
      this.audioService.playBackgroundMusic('medium');
    } else {
      this.audioService.playBackgroundMusic('hard');
    }
  }

  private loadCurrentQuestion(): void {
    this.currentQuestion = this.gameService.getCurrentQuestion();
    this.selectedAnswer = null;
    this.showResult = false;
    this.isCorrect = false;
    this.hiddenOptions = [];
  }

  selectAnswer(optionIndex: number): void {
    if (this.selectedAnswer !== null || this.showResult) {
      return;
    }

    this.selectedAnswer = optionIndex;
    this.isCorrect = optionIndex === this.currentQuestion?.correctAnswer;
    this.showResult = true;

    // Detener música de fondo
    this.audioService.stopBackgroundMusic();

    // Reproducir sonido de respuesta final
    this.audioService.play('final-answer');

    setTimeout(() => {
      if (this.isCorrect) {
        this.audioService.play('correct-answer');
      } else {
        this.audioService.play('wrong-answer');
      }

      setTimeout(() => {
        this.gameService.answerQuestion(this.isCorrect);
        
        if (this.gameState === GameState.PLAYING) {
          this.loadCurrentQuestion();
        }
      }, 2000);
    }, 2000);
  }

  useFiftyFifty(): void {
    if (this.fiftyFiftyUsed || this.showResult || !this.currentQuestion) {
      return;
    }

    this.fiftyFiftyUsed = true;
    this.audioService.play('quick-mind');
    
    const correctAnswer = this.currentQuestion.correctAnswer;
    const wrongOptions: number[] = [];

    // Recoger opciones incorrectas
    for (let i = 0; i < 4; i++) {
      if (i !== correctAnswer) {
        wrongOptions.push(i);
      }
    }

    // Eliminar 2 opciones incorrectas al azar
    const shuffled = wrongOptions.sort(() => Math.random() - 0.5);
    this.hiddenOptions = shuffled.slice(0, 2);
  }

  usePhoneCall(): void {
    if (this.phoneCallUsed || this.showResult || !this.currentQuestion) {
      return;
    }

    this.phoneCallUsed = true;
    this.audioService.play('phone-call');
    
    const correctAnswer = this.currentQuestion.correctAnswer;
    const letters = ['A', 'B', 'C', 'D'];
    
    // 80% de probabilidad de que el "amigo" acierte
    const friendKnows = Math.random() < 0.8;
    let suggestion: string;
    
    if (friendKnows) {
      suggestion = letters[correctAnswer];
    } else {
      // Si no sabe, sugiere una opción al azar
      const randomIndex = Math.floor(Math.random() * 4);
      suggestion = letters[randomIndex];
    }

    setTimeout(() => {
      alert(`📞 Zure lagunak dio: "Nik ${suggestion} aukeratuko nuke"`);
    }, 3000); // Esperar a que termine el sonido
  }

  isOptionHidden(index: number): boolean {
    return this.hiddenOptions.includes(index);
  }

  getCurrentPrize(): number {
    return this.prices[this.currentQuestionIndex] || 0;
  }

  getNextPrize(): number {
    return this.prices[this.currentQuestionIndex + 1] || 0;
  }

  restartGame(): void {
    this.fiftyFiftyUsed = false;
    this.phoneCallUsed = false;
    this.hiddenOptions = [];
    this.gameService.startNewGame();
    this.loadCurrentQuestion();
  }

  goToMenu(): void {
    this.gameService.resetGame();
    this.router.navigate(['/hasiera']);
  }

  getOptionClass(index: number): string {
    if (this.isOptionHidden(index)) {
      return 'hidden';
    }

    if (!this.showResult) {
      return this.selectedAnswer === index ? 'selected' : '';
    }

    if (index === this.currentQuestion?.correctAnswer) {
      return 'correct';
    }

    if (this.selectedAnswer === index && !this.isCorrect) {
      return 'wrong';
    }

    return '';
  }
}
