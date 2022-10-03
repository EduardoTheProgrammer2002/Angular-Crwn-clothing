import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthUserModalComponent } from './auth-user-modal.component';

describe('AuthUserModalComponent', () => {
  let component: AuthUserModalComponent;
  let fixture: ComponentFixture<AuthUserModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthUserModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthUserModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
