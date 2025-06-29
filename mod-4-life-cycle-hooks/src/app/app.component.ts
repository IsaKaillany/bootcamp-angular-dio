import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'mod-4-life-cycle-hooks-angular';
    isAliveCheckedSample: boolean = true;

    disposeCheckSample() {
        this.isAliveCheckedSample = false;
    }
}
