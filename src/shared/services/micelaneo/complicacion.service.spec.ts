import { TestBed } from '@angular/core/testing';

import { ComplicacionService } from './complicacion.service';

describe('ComplicacionService', () => {
  let service: ComplicacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComplicacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
