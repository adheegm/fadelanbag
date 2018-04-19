import { BrowserModule } from '@angular/platform-browser';
import {
  NgModule,
  Inject,
  PLATFORM_ID,
  APP_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { AppRouterModule } from './app-router.module';
import { AppGuard } from './app.guard';
import { AppComponent } from './app.component';
import { UserComponent } from './containers/user/user.component';
import { AdminComponent } from './containers/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'fadelan-back'}),
    RouterModule,
    AppRouterModule,
    TransferHttpCacheModule
  ],
  providers: [ AppGuard ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ? 'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId} in app.module.ts`);
  }
}
