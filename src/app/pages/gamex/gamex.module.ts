import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GamexPageRoutingModule } from './gamex-routing.module';

import { GamexPage } from './gamex.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GamexPageRoutingModule
  ],
  declarations: [GamexPage]
})
export class GamexPageModule {}
