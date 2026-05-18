import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  private sounds: { [key: string]: HTMLAudioElement } = {};
  private isMuted: boolean = false;
  private currentBackgroundMusic: HTMLAudioElement | null = null;

  constructor() {
    this.initializeSounds();
  }

  private initializeSounds(): void {
    // Cargar todos los sonidos
    this.sounds['main'] = new Audio('assets/sounds/main.mp3');
    this.sounds['lets-play'] = new Audio('assets/sounds/lets-play.mp3');
    this.sounds['easy-loop'] = new Audio('assets/sounds/easy-loop.mp3');
    this.sounds['medium-loop'] = new Audio('assets/sounds/medium-loop.mp3');
    this.sounds['hard-loop'] = new Audio('assets/sounds/hard-loop.mp3');
    this.sounds['correct-answer'] = new Audio('assets/sounds/correct-answer.mp3');
    this.sounds['wrong-answer'] = new Audio('assets/sounds/wrong-answer.mp3');
    this.sounds['final-answer'] = new Audio('assets/sounds/final-answer.mp3');
    this.sounds['phone-call'] = new Audio('assets/sounds/phone-call.mp3');
    this.sounds['quick-mind'] = new Audio('assets/sounds/quick-mind.mp3');
    this.sounds['commercial-break'] = new Audio('assets/sounds/commercial-break.mp3');

    // Configurar loops para música de fondo
    this.sounds['main'].loop = true;
    this.sounds['easy-loop'].loop = true;
    this.sounds['medium-loop'].loop = true;
    this.sounds['hard-loop'].loop = true;

    // Configurar volúmenes
    this.sounds['main'].volume = 0.3;
    this.sounds['easy-loop'].volume = 0.3;
    this.sounds['medium-loop'].volume = 0.3;
    this.sounds['hard-loop'].volume = 0.3;
    this.sounds['correct-answer'].volume = 0.7;
    this.sounds['wrong-answer'].volume = 0.7;
    this.sounds['final-answer'].volume = 0.6;
    this.sounds['phone-call'].volume = 0.5;
  }

  play(soundName: string): void {
    if (this.isMuted) return;

    if (this.sounds[soundName]) {
      this.sounds[soundName].currentTime = 0;
      this.sounds[soundName].play().catch(err => {
        console.warn('Error playing sound:', err);
      });
    }
  }

  playBackgroundMusic(difficulty: 'menu' | 'easy' | 'medium' | 'hard'): void {
    if (this.isMuted) return;

    // Detener música anterior
    this.stopBackgroundMusic();

    // Seleccionar música según dificultad
    let musicKey = 'main';
    if (difficulty === 'easy') musicKey = 'easy-loop';
    else if (difficulty === 'medium') musicKey = 'medium-loop';
    else if (difficulty === 'hard') musicKey = 'hard-loop';
    else if (difficulty === 'menu') musicKey = 'main';

    this.currentBackgroundMusic = this.sounds[musicKey];
    
    if (this.currentBackgroundMusic) {
      this.currentBackgroundMusic.play().catch(err => {
        console.warn('Error playing background music:', err);
      });
    }
  }

  stopBackgroundMusic(): void {
    if (this.currentBackgroundMusic) {
      this.currentBackgroundMusic.pause();
      this.currentBackgroundMusic.currentTime = 0;
      this.currentBackgroundMusic = null;
    }
  }

  toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    
    if (this.isMuted) {
      this.stopBackgroundMusic();
      // Pausar todos los sonidos
      Object.values(this.sounds).forEach(sound => {
        sound.pause();
      });
    }
    
    return this.isMuted;
  }

  isSoundMuted(): boolean {
    return this.isMuted;
  }
}
