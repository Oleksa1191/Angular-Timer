import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-red-circle',
  templateUrl: './red-circle.component.html',
  styleUrls: ['./red-circle.component.scss']
})
export class RedCircleComponent implements OnInit {
  timeString: any
  titleTime:any ="TIME REMAINING"
  percent: any;
  inter:any;
  seconds:any = 3600
  Fortext: any = "fortext"
  
  constructor() { }

  ngOnInit(): void {
    this.setTimer()
  }
  setTimer() {
    this.seconds = 3600;
    this.percent = 0;
    this.inter = setInterval(() => {
      this.seconds = this.seconds - 1;
      this.percent = (1 - (this.seconds / 3600)) * 100;
      this.timeString = this.secondsToTime(this.seconds)
    }, 10)
  }
  titleFormat(){
    this.titleTime
  }

  secondsToTime(seconds) {
    var date = new Date(0);
    date.setSeconds(seconds); // specify value for SECONDS here
    var timeString = date.toISOString().substr(14, 5);
    return timeString
  }
  reset() {
    clearInterval(this.inter);
    this.seconds = 3600;
    this.setTimer();
  }
}
