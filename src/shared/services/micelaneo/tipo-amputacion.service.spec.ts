import { TestBed } from '@angular/core/testing';

import { TipoAmputacionService } from './tipo-amputacion.service';

describe('TipoAmputacionService', () => {
  let service: TipoAmputacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoAmputacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
