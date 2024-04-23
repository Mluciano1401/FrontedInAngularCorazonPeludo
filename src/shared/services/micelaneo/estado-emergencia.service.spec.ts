import { TestBed } from '@angular/core/testing';

import { EstadoEmergenciaService } from './estado-emergencia.service';

describe('EstadoEmergenciaService', () => {
  let service: EstadoEmergenciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstadoEmergenciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
