import { Player } from './../../models/player';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-modal-stat-player',
  templateUrl: './game-modal-stat-player.component.html',
  styleUrls: ['./game-modal-stat-player.component.scss'],
})
export class GameModalStatPlayerComponent implements OnInit {

  @Input() player:Player;

  constructor() { }

  ngOnInit() {}

}
