import { TestBed } from '@angular/core/testing';

import { ViaAdministracionService } from './via-administracion.service';

describe('ViaAdministracionService', () => {
  let service: ViaAdministracionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViaAdministracionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
