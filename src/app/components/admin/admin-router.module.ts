import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { AdminComponent } from '../../containers/admin/admin.component';
import { adminRoutes } from './admin.routes';

@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes),
    ],
    exports: [ RouterModule ]
})
export class AdminRouterModule {}
