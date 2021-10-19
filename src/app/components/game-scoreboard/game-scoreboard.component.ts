import { Quarter } from './../../models/quarter';
import { Game } from './../../models/game';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-scoreboard',
  templateUrl: './game-scoreboard.component.html',
  styleUrls: ['./game-scoreboard.component.scss'],
})
export class GameScoreboardComponent implements OnInit {


  @Input() game:Game;
  @Input() quarters: Quarter[];
  @Input() activeQuarter:Quarter;

  @Output() events = new EventEmitter<Quarter>();

  constructor() { }

  ngOnInit() {}


  eventQuarters(quarter: Quarter) {
    this.activeQuarter = quarter;
    this.events.emit( quarter );
  }

}
