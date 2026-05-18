import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AudioService } from '../../services/audio.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {
  
  constructor(
    private router: Router,
    private audioService: AudioService
  ) { }

  ngOnInit(): void {
    // Reproducir música del menú
    setTimeout(() => {
      this.audioService.playBackgroundMusic('menu');
    }, 500);
  }

  ngOnDestroy(): void {
    this.audioService.stopBackgroundMusic();
  }

  startGame(): void {
    this.audioService.stopBackgroundMusic();
    this.router.navigate(['/jolastu']);
  }
}
