import {
  NgModule,
  Inject,
  PLATFORM_ID,
  APP_ID
} from '@angular/core';
import {
  ServerModule,
  ServerTransferStateModule
} from '@angular/platform-server';
import { BrowserModule } from '@angular/platform-browser';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { isPlatformBrowser } from '@angular/common';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { AppGuard } from './app.guard';

@NgModule({
    imports: [
        AppModule,
        ServerModule,
        ModuleMapLoaderModule,
        ServerTransferStateModule
    ],
    providers: [],
    bootstrap: [ AppComponent ],
})
export class AppServerModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ? 'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId} in app.server.module.ts`);
  }
}
