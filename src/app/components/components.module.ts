import { StatsFilterPipe } from './../pipes/stats-filter.pipe';
import { GameModalLogComponent } from './game-modal-log/game-modal-log.component';
import { GameScoreboardComponent } from './game-scoreboard/game-scoreboard.component';
import { GameModalStatPlayerComponent } from './game-modal-stat-player/game-modal-stat-player.component';
import { GameModalLineupComponent } from './game-modal-lineup/game-modal-lineup.component';
import { GameModalStatComponent } from './game-modal-stat/game-modal-stat.component';
import { GameLineupComponent } from './game-lineup/game-lineup.component';
import { GameClockComponent } from './game-clock/game-clock.component';
import { GameSummaryComponent } from './game-summary/game-summary.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule
    ],
    declarations: [
        //CommonModule,
        GameSummaryComponent,
        GameClockComponent,
        GameLineupComponent,
        GameModalStatComponent,
        GameModalLineupComponent,
        GameModalStatPlayerComponent,
        GameModalLogComponent,
        GameScoreboardComponent,
        StatsFilterPipe
    ],
    exports:[
        GameSummaryComponent,
        GameClockComponent,
        GameLineupComponent,
        GameModalStatComponent,
        GameModalLineupComponent,
        GameModalStatPlayerComponent,
        GameModalLogComponent,
        GameScoreboardComponent
    ],
  })
  export class ComponentsModule { }