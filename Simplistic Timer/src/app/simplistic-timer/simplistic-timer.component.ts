import { Component, OnInit, ViewChild } from '@angular/core';
import { CountdownComponent } from 'ngx-countdown';

@Component({
  selector: 'app-simplistic-timer',
  templateUrl: './simplistic-timer.component.html',
  styleUrls: ['./simplistic-timer.component.scss']
})
export class SimplisticTimerComponent implements OnInit {
  public readonly majorSteps = 12;
  public readonly minorSteps = 60;
  timeString: any
  deg: any;
  sec: any = 0;
  inter: any;
  stop=true
  status = 'ready';
  @ViewChild('countdown') counter: CountdownComponent;
  @ViewChild('countdown1') counter1: CountdownComponent;

  // start() {
  //   this.status = 'started';
  //   this.counter.begin();
  // }

  // finishTest() {
  //   console.log("count down", this.counter);
  //   setTimeout(() => this.counter.restart());
  //   this.status = 'restarted';
  // }

  // resetTimer() {
  //   this.counter.restart();
  // }

  timesUp(event) {
     if (event.action == "done")
      { 
    setTimeout(() => this.counter.restart());
    this.status = 'restarted';
       } }

       timesUp1(event) {
        if (event.action == "done")
         { 
           this.stop=false
      //  setTimeout(() => this.counter1.restart());
      //  this.status = 'restarted';
          } }

  ngOnInit(): void {
    this.setTimer();
    
  }
  setTimer() {
    this.deg = 0;
    this.sec = 0;
    this.inter = setInterval(() => {
      this.deg = this.deg + 0.1;
      this.sec = this.sec + 6;
    }, 1000)
  }
  reset() {
    clearInterval(this.inter);
    this.setTimer();
  }
  public getForegroundColor(): string {
    return '#000';
  }
  public get minors(): number[] {
    return new Array(this.minorSteps);
  }

  public get majors(): number[] {
    return new Array(this.majorSteps);
  }
}
