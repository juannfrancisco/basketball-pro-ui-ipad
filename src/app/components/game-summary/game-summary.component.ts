import { Quarter } from './../../models/quarter';
import { Game } from './../../models/game';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-summary',
  templateUrl: './game-summary.component.html',
  styleUrls: ['./game-summary.component.scss'],
})
export class GameSummaryComponent implements OnInit {

  @Input() game:Game;
  @Input() quarters: Quarter[];
  @Input() activeQuarter:Quarter;

  constructor() { }

  ngOnInit() {}

}
