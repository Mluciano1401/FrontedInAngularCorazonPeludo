import { TestBed } from '@angular/core/testing';

import { ComplejidadService } from './complejidad.service';

describe('ComplejidadService', () => {
  let service: ComplejidadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComplejidadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
