import { TestBed } from '@angular/core/testing';

import { AuthUserModalService } from './auth-user-modal.service';

describe('AuthUserModalService', () => {
  let service: AuthUserModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthUserModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
