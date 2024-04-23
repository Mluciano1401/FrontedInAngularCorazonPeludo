import { TestBed } from '@angular/core/testing';

import { AnimalAlbergueService } from './animal-albergue.service';

describe('AnimalAlbergueService', () => {
  let service: AnimalAlbergueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimalAlbergueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
