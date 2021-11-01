import { element } from 'protractor';
import { Digit } from './../../models/digit-scoreboard';
import { Quarter } from './../../models/quarter';
import { constants } from './../../../environments/constants';
import { PlayersService } from './../../services/players.service';
import { GamesService } from './../../services/games.service';
import { GameStat } from './../../models/game-stat';
import { Game } from './../../models/game';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Stats } from '../../models/stats';
import { denodeify } from 'q';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-game-live',
  templateUrl: './game-live.page.html',
  styleUrls: ['./game-live.page.scss'],
})
export class GameLivePage implements OnInit {

  element: Game = new Game();
  localStats: GameStat[] = [];
  visitorStats: GameStat[] = [];
  oidChampionship: string;
  gameStats: GameStat[] = [];
  quarters: Quarter[] = [];
  activeQuarter: Quarter = {
    number: 1, name: "QT", 
    localPoints: 0, 
    visitorPoints: 0, 
    localFouls: 0, 
    visitorFouls: 0, 
    state: "pause", 
    localTimeouts: [],
    visitorTimeouts: [],
    timetext: "10:00"
  };
  loading: boolean;

  constructor(
    private service: GamesService,
    private servicePlayers: PlayersService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let oidURL = this.route.snapshot.paramMap.get('id');
    this.quarters.push(this.activeQuarter);
    this.findById(oidURL);
  }


  /**
   * 
   * @param oidURL 
   */
  async findById(oidURL) {
    try {
      this.loading = true;
      this.element = await this.service.findById(oidURL).toPromise();
      this.element.local.players = await this.servicePlayers.findAllByTeam(this.element.local.oid).toPromise();
      this.element.visitor.players = await this.servicePlayers.findAllByTeam(this.element.visitor.oid).toPromise();
      this.gameStats = await this.service.findStats(this.element.oid).toPromise();

      this.element.local.players = this.element.local.players.sort((a, b) => (a.number < b.number ? -1 : 1));
      this.element.visitor.players = this.element.visitor.players.sort((a, b) => (a.number < b.number ? -1 : 1));

      this.element.localScoreObj = [{number:"0",active:false},{number:"0",active:false},{number:"0",active:false}];
      this.element.visitorScoreObj = [{number:"0",active:false},{number:"0",active:false},{number:"0",active:false}];

      this.element.local.players.forEach(player => {
        player.position = constants[player.position];
        player.stats = new Stats();
      });
      this.element.visitor.players.forEach(player => {
        player.position = constants[player.position];
        player.stats = new Stats();
      });

      //this.processStats();

      this.loading = false;
    } catch (e) {
      this.loading = false;
    }
  }


  /**
   * Recibe el evento de un punto, foul etc desde el modal.
   * @param statEvent 
   */
  eventStats(statEvent: GameStat) {

    if (statEvent) {
      let activeQuarter = this.quarters[this.quarters.length - 1];
      let value = 0;
      
      statEvent.player.stats[statEvent.type] = statEvent.player.stats[statEvent.type] + statEvent.value;

      debugger;
      statEvent.quarterTimeText = this.activeQuarter.timetext;

      this.gameStats.push(statEvent);
      this[statEvent.typeTeam.toLowerCase() + "Stats"].push(statEvent);

      if (statEvent.type == "PTS" || statEvent.type == "MPT" ) {
        statEvent.player.stats[statEvent.type+statEvent.value] = statEvent.player.stats[statEvent.type+statEvent.value] + statEvent.value;
      }


      if (statEvent.type == "PTS") {
        
        value = statEvent.value;
        if (statEvent.typeTeam.toLowerCase() == "local") {
          this.element.localScore = this.element.localScore + value;
          activeQuarter.localPoints = activeQuarter.localPoints + value;
          this.element.localScoreObj = this.toDigit(this.element.localScore);


        } else {
          this.element.visitorScore = this.element.visitorScore + value;
          activeQuarter.visitorPoints = activeQuarter.localPoints + value;
          
          this.element.visitorScoreObj = this.toDigit(this.element.visitorScore);
        }
      }

      if (statEvent.type == "PF") {
        statEvent.player.fouls = statEvent.player.fouls ? statEvent.player.fouls + 1 : 1;

        if (statEvent.typeTeam.toLowerCase() == "local") {
          activeQuarter.localFouls = activeQuarter.localFouls + 1;
        }
        else {
          activeQuarter.visitorFouls = activeQuarter.visitorFouls + 1;
        }
      }
    }
  }

  /**
   * Convierte un integer a string con un formato de tres digitos, 
   * por ejemplo si vienen un integer 3 retorna el string "003"
   * @param num 
   */
  toDigit(num:number):Digit[]{
    let digits:Digit[] = []; 
    let digitsSplit = num.toString().split('');
    let size = 3- digitsSplit.length ;
    for( var i = 0; i < size; i++ ){
      digits.push( {number:"0", active:false} )
    }
    digitsSplit.forEach( numStr =>{
      digits.push( {number:numStr, active:true} )
    });
    return digits;
  }




  eventQuarters(quarter: Quarter) {
    this.activeQuarter = quarter;
  }


}
