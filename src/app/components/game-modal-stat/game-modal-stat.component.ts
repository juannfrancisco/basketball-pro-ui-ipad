import { TypeStat } from './../../models/type-stat';
import { TypeTeam } from './../../models/type-team';
import { Quarter } from './../../models/quarter';
import { GameStat } from './../../models/game-stat';
import { GamesService } from './../../services/games.service';
import { Player } from './../../models/player';
import { Team } from './../../models/team';
import { Game } from './../../models/game';
import { ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-modal-stat',
  templateUrl: './game-modal-stat.component.html',
  styleUrls: ['./game-modal-stat.component.scss'],
})
export class GameModalStatComponent implements OnInit {

  @Input() game: Game;
  @Input() team: Team;
  @Input() player: Player;
  @Input() typeTeam: TypeTeam;
  @Input() activeQuarter: Quarter;


  constructor(
    public modalController: ModalController,
    public gamesService: GamesService
  ) { }

  ngOnInit() { }

  close() {
    this.modalController.dismiss();
  }


  /**
   * 
   * @param num 
   * @param typeStat 
   */
  addStat(value:number, typeStat:string){
    let gameStat:GameStat = new GameStat();
    gameStat.oidPlayer = this.player.oid;
    gameStat.quarter = this.activeQuarter.number;
    gameStat.teamOid = this.team.oid;
    gameStat.type = TypeStat[typeStat];
    gameStat.typeTeam = this.typeTeam;
    gameStat.value = value;
    gameStat.quarterTimeText = this.activeQuarter.timetext;
    this.modalController.dismiss( gameStat );
  }

}
