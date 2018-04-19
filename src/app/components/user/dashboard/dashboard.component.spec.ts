import { TestBed, async } from '@angular/core/testing';
import { UserDashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserDashboardComponent
      ],
    }).compileComponents();
  }));
  it('should create UserDashboardComponent', async(() => {
    const fixture = TestBed.createComponent(UserDashboardComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
