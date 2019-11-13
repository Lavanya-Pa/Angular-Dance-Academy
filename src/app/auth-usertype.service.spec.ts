import { TestBed } from '@angular/core/testing';

import { AuthUsertypeService } from './auth-usertype.service';

describe('AuthUsertypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthUsertypeService = TestBed.get(AuthUsertypeService);
    expect(service).toBeTruthy();
  });
});
