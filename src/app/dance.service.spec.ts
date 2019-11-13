import { TestBed } from '@angular/core/testing';

import { DanceService } from './dance.service';

describe('DanceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DanceService = TestBed.get(DanceService);
    expect(service).toBeTruthy();
  });
});
