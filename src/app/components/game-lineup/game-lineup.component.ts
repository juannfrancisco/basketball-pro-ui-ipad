import { Timeout } from './../../models/timeout';
import { GameModalStatPlayerComponent } from './../game-modal-stat-player/game-modal-stat-player.component';
import { Quarter } from './../../models/quarter';
import { GameStat } from './../../models/game-stat';
import { Player } from './../../models/player';
import { GameModalLineupComponent } from './../game-modal-lineup/game-modal-lineup.component';
import { Game } from './../../models/game';
import { GameModalStatComponent } from './../game-modal-stat/game-modal-stat.component';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Team } from '../../models/team';

@Component({
  selector: 'app-game-lineup',
  templateUrl: './game-lineup.component.html',
  styleUrls: ['./game-lineup.component.scss'],
})
export class GameLineupComponent implements OnInit {

  @Input() team:Team;
  @Input() typeTeam:string;
  @Input() game:Game;
  @Input() quarter: Quarter[];
  @Output() stats = new EventEmitter<GameStat>();



  constructor(public modalController: ModalController) { }

  ngOnInit() { 
  }

  /**
   * 
   * @param player 
   * @param teamType 
   */
  async optionPlayer(player:Player, teamType:string) {
    let activeQuarter = this.quarter[this.quarter.length-1];
    const modal = await this.modalController.create({
      component: GameModalStatComponent,
      componentProps: {
        'team': this.team,
        'game': this.game,
        'player': player,
        'typeTeam':this.typeTeam,
        'quarter': this.quarter.length
      }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();

    if(data){
      data.player = player;
      this.stats.emit( data );
    }
  }

  /**
   * 
   */
  async lineup(){
    const modal = await this.modalController.create({
      component: GameModalLineupComponent,
      componentProps: {
        'team': this.team
      }
    });
    return await modal.present();
  }


  async viewStats(player:Player){
    const modal = await this.modalController.create({
      component: GameModalStatPlayerComponent,
      componentProps: {
        'player': player
      }
    });
    return await modal.present();
  }

  async timeout( ){
    let activeQuarter = this.quarter[this.quarter.length-1];
    let timeout = new Timeout();
    timeout.timetext = activeQuarter.timetext;
    activeQuarter[ this.typeTeam + "Timeouts"].push( new Timeout() );
  }

}
