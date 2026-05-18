import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './pages/menu/menu.component';
import { GameComponent } from './pages/game/game.component';

const routes: Routes = [
  { path: '', redirectTo: '/hasiera', pathMatch: 'full' },
  { path: 'hasiera', component: MenuComponent },
  { path: 'jolastu', component: GameComponent },
  { path: '**', redirectTo: '/hasiera' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
