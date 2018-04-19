import { TestBed, async } from '@angular/core/testing';
import { UserComponent } from './user.component';
import { RouterModule } from '@angular/router';

describe('UserComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule
      ],
      declarations: [
        UserComponent
      ],
    }).compileComponents();
  }));
  it('should create container UserComponent', async(() => {
    const fixture = TestBed.createComponent(UserComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
