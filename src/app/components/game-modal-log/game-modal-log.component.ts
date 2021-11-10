import { Quarter } from './../../models/quarter';
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
  @Input() activeQuarter:Quarter;
  numberQuarter:number = 0;


  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {
    this.numberQuarter = this.activeQuarter.number;
  }

  close() {
    this.modalController.dismiss();
  }


  quarterChanged(ev: any) {
    this.numberQuarter = ev.detail.value;
    console.log('Segment changed', ev);
  }

}
