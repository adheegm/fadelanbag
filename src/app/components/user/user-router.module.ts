import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { AdminComponent } from '../../containers/admin/admin.component';
import { userRoutes } from './user.routes';

@NgModule({
    imports: [
        RouterModule.forChild(userRoutes),
    ],
    exports: [ RouterModule ]
})
export class UserRouterModule {}
