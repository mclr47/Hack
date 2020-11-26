import { TestBed } from '@angular/core/testing';

import { TimefireService } from './timefire.service';

describe('TimefireService', () => {
  let service: TimefireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimefireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
