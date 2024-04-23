import { TestBed } from '@angular/core/testing';

import { TipoSintomaService } from './tipo-sintoma.service';

describe('TipoSintomaService', () => {
  let service: TipoSintomaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoSintomaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
