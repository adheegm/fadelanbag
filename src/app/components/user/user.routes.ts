import { Route } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserDashboardComponent } from './dashboard/dashboard.component';
import { UserGuard } from './user.guard';

export const userRoutes: Route[] = [
    { path: '', canActivate: [ UserGuard ], component: UserDashboardComponent },
    { path: 'login', component: LoginComponent }
];
