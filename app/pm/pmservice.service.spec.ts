import { TestBed } from '@angular/core/testing';

import { PMServiceService } from './pmservice.service';

describe('PMServiceService', () => {
  let service: PMServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PMServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
