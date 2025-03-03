import { TestBed } from '@angular/core/testing';

import { ServiciossService } from './servicioss.service';

describe('ServiciossService', () => {
  let service: ServiciossService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciossService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
