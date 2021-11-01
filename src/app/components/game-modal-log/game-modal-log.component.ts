import { ModalController } from '@ionic/angular';
import { GameStat } from './../../models/game-stat';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-modal-log',
  templateUrl: './game-modal-log.component.html',
  styleUrls: ['./game-modal-log.component.scss'],
})
export class GameModalLogComponent implements OnInit {

  @Input() gameStats:GameStat[];


  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {}

  close() {
    this.modalController.dismiss();
  }

}
