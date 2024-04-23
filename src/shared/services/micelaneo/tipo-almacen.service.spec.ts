import { TestBed } from '@angular/core/testing';

import { TipoAlmacenService } from './tipo-almacen.service';

describe('TipoAlmacenService', () => {
  let service: TipoAlmacenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoAlmacenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
