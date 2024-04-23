import { TestBed } from '@angular/core/testing';

import { NivelUrgenciaService } from './nivel-urgencia.service';

describe('NivelUrgenciaService', () => {
  let service: NivelUrgenciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NivelUrgenciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
