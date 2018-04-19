import { Route } from '@angular/router';
import { UserComponent } from './containers/user/user.component';
import { AdminComponent } from './containers/admin/admin.component';
import { AppGuard } from './app.guard';

export const appRoutes: Route[] = [
    { path: '', component: UserComponent, loadChildren: './components/user/user.module#UserModule' },
    { path: 'admin', canActivate: [ AppGuard ], component: AdminComponent, loadChildren: './components/admin/admin.module#AdminModule' },
];
