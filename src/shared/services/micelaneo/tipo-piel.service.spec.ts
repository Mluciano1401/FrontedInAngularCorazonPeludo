import { TestBed } from '@angular/core/testing';

import { TipoPielService } from './tipo-piel.service';

describe('TipoPielService', () => {
  let service: TipoPielService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoPielService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
