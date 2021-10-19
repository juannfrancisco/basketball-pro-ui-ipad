import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamexPage } from './gamex.page';

const routes: Routes = [
  {
    path: '',
    component: GamexPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamexPageRoutingModule {}
