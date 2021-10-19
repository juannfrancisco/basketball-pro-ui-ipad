import { ModalController } from '@ionic/angular';
import { Player } from './../../models/player';
import { Team } from './../../models/team';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-modal-lineup',
  templateUrl: './game-modal-lineup.component.html',
  styleUrls: ['./game-modal-lineup.component.scss'],
})
export class GameModalLineupComponent implements OnInit {

  @Input() team:Team;
  totalSelected: number = 0;

  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {
    this.team.players.forEach( player=>{
      if( player.headline ){
        this.totalSelected ++;
      }
    });
  }

  close() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }



  selectPlayer(player: Player) {
    if (this.totalSelected < 5) {
      if (player.headline) {
        player.headline = false;
        this.totalSelected--;
      } else {
        player.headline = true;
        this.totalSelected++;
      }
    } else {
      if (player.headline) {
        player.headline = false;
        this.totalSelected--;
      }
    }
  }

}
