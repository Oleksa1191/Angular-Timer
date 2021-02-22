import { Component, Input, OnInit } from '@angular/core';
declare var FlipDown;
declare var $:any

@Component({
  selector: 'app-fliptimer',
  templateUrl: './fliptimer.component.html',
  styleUrls: ['./fliptimer.component.scss']
})
export class FliptimerComponent implements OnInit {
 
  ngOnInit() {
    this.mainJs()
    
  }
  
  public mainJs() {
    document.addEventListener('DOMContentLoaded', () => {

      // Unix timestamp (in seconds) to count down to
      var twoDaysFromNow = (new Date().getTime() / 1000) + (30 * 2) + 1;
    
      // Set up FlipDown
      var flipdown = new FlipDown(twoDaysFromNow)
    
        // Start the countdown
        .start()
    
        // Do something when the countdown ends
        .ifEnded(() => {
          console.log('The countdown has ended!');
        });
    
    
      // Show version number
      var ver = document.getElementById('ver');
      ver.innerHTML = flipdown.version;
    });
    
  }
  
}
