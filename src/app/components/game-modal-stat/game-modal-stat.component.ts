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
  @Input() typeTeam: string;
  @Input() quarter: number;


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
    gameStat.quarter = 1;
    gameStat.teamOid = this.team.oid;
    gameStat.type = typeStat;
    gameStat.typeTeam = this.typeTeam;
    gameStat.value = value;

    //this.gamesService.saveStat(this.game.oid, gameStat).subscribe();
    this.modalController.dismiss( gameStat );
    //this.activeModal.close(gameStat);
  }

}
