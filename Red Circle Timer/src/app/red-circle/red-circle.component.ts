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
  seconds:any = 60
  Fortext: any = "fortext"
  
  progress = 0;
  constructor() { }
  progressBar = document.querySelector('.progress-bar');
  intervalId;

  ngOnInit(): void {
    this.setTimer()
    const getDownloadProgress = () => {
      if (this.progress <= 99) {
        this.progress = this.progress + 1;
      }
      else {
        clearInterval(this.intervalId);
      }
    }
    this.intervalId = setInterval(getDownloadProgress, 600);
  }
  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
  setTimer() {
    this.seconds = 60;
    this.percent = 0;
    this.inter = setInterval(() => {
      this.seconds = this.seconds - 1;
      this.percent = (1 - (this.seconds / 60)) * 1;
      this.timeString = this.secondsToTime(this.seconds)
    }, 1000)
  }
  titleFormat(){
    this.titleTime
  }

  secondsToTime(seconds) {
  if(seconds>=0){
    var date = new Date(0);
    date.setSeconds(seconds); // specify value for SECONDS here
    var timeString = date.toISOString().substr(14, 5);
    return timeString
  }
}
  reset() {
    clearInterval(this.inter);
    this.seconds = 60;
    this.setTimer();
  }
}
