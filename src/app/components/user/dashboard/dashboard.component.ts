import { Component } from '@angular/core';

@Component({
    selector: 'app-user-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: [ './dashboard.component.scss' ]
})
export class UserDashboardComponent {
    constructor() {
        console.log('dashboard component');
    }
}
