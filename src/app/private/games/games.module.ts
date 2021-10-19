import { ComponentsModule } from './../../components/components.module';
import { GameListComponent } from './game-list/game-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GamesPageRoutingModule } from './games-routing.module';

import { GamesPage } from './games.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    GamesPageRoutingModule
  ],
  declarations: [
    GamesPage
  ],
  exports:[
  ],
})
export class GamesPageModule { }
