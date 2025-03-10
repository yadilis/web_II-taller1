import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { ivaGuard } from './iva.guard';

describe('ivaGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => ivaGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
