import { TestBed } from '@angular/core/testing';

import { EstadoLugarService } from './estado-lugar.service';

describe('EstadoLugarService', () => {
  let service: EstadoLugarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstadoLugarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
