import {AfterViewInit, Component} from '@angular/core';

@Component({
    selector: 'app-fliptimer',
    templateUrl: './fliptimer.component.html',
    styleUrls: ['./fliptimer.component.scss']
})
export class FliptimerComponent implements AfterViewInit {

    public readonly flipDownId = Math.random().toString(36).substring(2);

    private flipDown: any;

    ngAfterViewInit(): void {
        this.initFlipDown();
        this.start();
    }

    public start(): void {
        this.flipDown.start();
    }

    private initFlipDown(): void {

        const twoDaysFromNow = (new Date().getTime() / 1000) + (30 * 2) + 1;

        this.flipDown = new FlipDown(twoDaysFromNow, this.flipDownId, {})
            .ifEnded(() => {
                console.log('The countdown has ended!');
            });
    }
}
