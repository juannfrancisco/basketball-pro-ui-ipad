import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameLivePage } from './game-live.page';

const routes: Routes = [
  {
    path: '',
    component: GameLivePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameLivePageRoutingModule {}
