import { TestBed, async, tick } from '@angular/core/testing';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { AppComponent } from '../../app.component';
import { UserComponent } from '../user/user.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from '../../app-router.module';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { AppGuard } from '../../app.guard';
import { NgModuleFactoryLoader } from '@angular/core';
import { appRoutes } from '../../app.routes';

describe('AdminComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
      providers: [ AppGuard ]
    }).compileComponents();
  }));
  it('should create container AdminComponent', async(() => {
    const router = TestBed.get(appRoutes);
    const location = TestBed.get(Location);
    const fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();

    const loader = TestBed.get(NgModuleFactoryLoader);
    loader.stubbedModules = {lazyModule: './components/user/user.module#UserModule'};

    router.resetConfig([
      {path: '', loadChildren: 'login'},
    ]);

    router.navigateByUrl('/login');

    tick();
    fixture.detectChanges();

    expect(location.path()).toBe('/login');
  }));
});
