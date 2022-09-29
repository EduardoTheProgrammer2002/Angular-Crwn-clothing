import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsAlertComponent } from './payments-alert.component';

describe('PaymentsAlertComponent', () => {
  let component: PaymentsAlertComponent;
  let fixture: ComponentFixture<PaymentsAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentsAlertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentsAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
