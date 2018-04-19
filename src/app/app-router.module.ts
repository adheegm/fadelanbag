import { NgModule } from '@angular/core';
import {
    RouterModule,
    Route,
    PreloadAllModules
} from '@angular/router';
import { appRoutes } from './app.routes';

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {
                preloadingStrategy: PreloadAllModules,
                initialNavigation: 'enabled',
                useHash: true
            }
        ),
    ],
    exports: [ RouterModule ]
})
export class AppRouterModule {}
