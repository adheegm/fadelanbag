import { TestBed, async } from '@angular/core/testing';
import { AdminDashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AdminDashboardComponent
      ],
    }).compileComponents();
  }));
  it('should create AdminDashboardComponent', async(() => {
    const fixture = TestBed.createComponent(AdminDashboardComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
