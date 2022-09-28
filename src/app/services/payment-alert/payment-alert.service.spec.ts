import { TestBed } from '@angular/core/testing';

import { PaymentAlertService } from './payment-alert.service';

describe('PaymentAlertService', () => {
  let service: PaymentAlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentAlertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
