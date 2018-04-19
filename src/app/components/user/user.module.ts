import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { UserRouterModule } from './user-router.module';
import { UserDashboardComponent } from './dashboard/dashboard.component';
import { UserGuard } from './user.guard';

@NgModule({
    declarations: [
        UserDashboardComponent,
        LoginComponent
    ],
    imports: [ UserRouterModule ],
    providers: [ UserGuard ]
})
export class UserModule {
    constructor() {
        console.log('user module');
    }
}
