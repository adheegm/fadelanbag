import { NgModule } from '@angular/core';
import { AdminRouterModule } from './admin-router.module';
import { AdminDashboardComponent } from './dashboard/dashboard.component';

@NgModule({
    declarations: [ AdminDashboardComponent ],
    imports: [ AdminRouterModule ]
})
export class AdminModule {}
