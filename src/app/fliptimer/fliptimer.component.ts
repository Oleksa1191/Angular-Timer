import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-fliptimer',
  templateUrl: './fliptimer.component.html',
  styleUrls: ['./fliptimer.component.scss']
})
export class FliptimerComponent implements OnInit {
 
  ngOnInit() {
    this.loadScript('../../assets/js/main.js');
    this.loadScript('../../assets/js/flipdown/flipdown.js');
  }
  

  public loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }
}
