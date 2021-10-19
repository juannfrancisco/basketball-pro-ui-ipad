import { GamePlayingComponent } from './game-playing/game-playing.component';
import { GameListComponent } from './game-list/game-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamesPage } from './games.page';

const routes: Routes = [
  {
    path: '',
    component: GamesPage
  },
  {
    path: 'list',
    component: GameListComponent
  },
  {
    path: ':id/playing',
    component: GamePlayingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamesPageRoutingModule {}
