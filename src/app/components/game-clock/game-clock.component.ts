import { Quarter } from './../../models/quarter';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { take, takeWhile, takeUntil } from 'rxjs/operators';

const STATE_CLOCK_PLAY = "play";
const STATE_CLOCK_STOP = "stop";
const STATE_CLOCK_PAUSE = "pause";

@Component({
  selector: 'app-game-clock',
  templateUrl: './game-clock.component.html',
  styleUrls: ['./game-clock.component.scss'],
})
export class GameClockComponent implements OnInit {

  @Input() quarter: Quarter[];
  @Input() activeQuarter: Quarter;
  @Output() eventQuarters = new EventEmitter<Quarter>();

  timetext: string = "00:00";
  
  stateWatchx: string = STATE_CLOCK_STOP
  timeInit: number = 600;
  time: number = this.timeInit;
  timer: Subscription;



  constructor() { }

  ngOnInit(): void {
  }

  addQuarter() {
    let quarter = new Quarter();
    quarter.number = (this.quarter.length + 1);
    quarter.name =  this.quarter.length > 3 ? " OT":" QT";
    quarter.state = STATE_CLOCK_PLAY;
    return quarter;
  }

  intervalClock( x ){
    if (this.time > 0) {
      this.time = this.time - 1;
      var hour = Math.floor(this.time / 3600);
      var min = Math.floor(this.time / 60);
      var seconds = this.time % 60;
      //this.timetext = (hour < 10 ? "0" + hour : hour) + ":" + (min < 10 ? "0" + min : min) + ":" + (seconds < 10 ? "0" + seconds : seconds);
      this.timetext = (min < 10 ? "0" + min : min) + ":" + (seconds < 10 ? "0" + seconds : seconds);
      this.activeQuarter.timetext = this.timetext;
    } else {
      this.stopQuarter();
    }
  }

  /**
	 * 
	 */
  startCount() {
    if (this.activeQuarter.state == STATE_CLOCK_STOP) {
      let quarter = this.addQuarter();
      this.activeQuarter = quarter;
      this.quarter.push(quarter);
      this.eventQuarters.emit(quarter);
    }
    if (this.timer && this.activeQuarter.state == STATE_CLOCK_PLAY) { return; }

    this.activeQuarter.state = STATE_CLOCK_PLAY;
    this.activeQuarter.state = STATE_CLOCK_PLAY;
    this.timer = interval(1000).pipe(takeWhile(val => this.activeQuarter.state == STATE_CLOCK_PLAY)).subscribe(x => {
      this.intervalClock(x);
    });
  };

  /**
   * 
   */
  stopQuarter() {
    this.activeQuarter.state = STATE_CLOCK_STOP;
    this.activeQuarter.state = STATE_CLOCK_STOP;
    if (this.timer) {
      this.timer.unsubscribe();
      this.timer = undefined;
    }
    this.time = this.timeInit;
    this.timetext = "00:00";
  }

  /**
	 * 
	 */
  pauseCount() {
    if (this.timer) {
      this.activeQuarter.state = STATE_CLOCK_PAUSE;
      this.activeQuarter.state = STATE_CLOCK_PAUSE;
      this.timer.unsubscribe();
      this.timer = undefined;
    }
  }

}
