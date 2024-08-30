import { TestBed } from '@angular/core/testing';

import { ProjectManagerServicesService } from './project-manager-services.service';

describe('ProjectManagerServicesService', () => {
  let service: ProjectManagerServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectManagerServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
