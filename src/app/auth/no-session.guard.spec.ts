import { TestBed } from '@angular/core/testing';

import { NoSessionGuard } from './no-session.guard';

describe('NoSessionGuard', () => {
  let guard: NoSessionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NoSessionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
