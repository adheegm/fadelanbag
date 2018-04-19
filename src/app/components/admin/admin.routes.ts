import { Route } from '@angular/router';
import { AdminComponent } from '../../containers/admin/admin.component';
import { AdminDashboardComponent } from './dashboard/dashboard.component';

export const adminRoutes: Route[] = [
    { path: '', component: AdminDashboardComponent }
];
