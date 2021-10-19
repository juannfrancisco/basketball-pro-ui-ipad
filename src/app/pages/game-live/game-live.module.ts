import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GameLivePageRoutingModule } from './game-live-routing.module';

import { GameLivePage } from './game-live.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    GameLivePageRoutingModule
  ],
  declarations: [GameLivePage]
})
export class GameLivePageModule {}
