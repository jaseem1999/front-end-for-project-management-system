import { TestBed } from '@angular/core/testing';

import { CpoServicesService } from './cpo-services.service';

describe('CpoServicesService', () => {
  let service: CpoServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CpoServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
