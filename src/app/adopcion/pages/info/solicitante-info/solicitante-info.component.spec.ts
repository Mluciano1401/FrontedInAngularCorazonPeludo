import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitanteInfoComponent } from './solicitante-info.component';

describe('SolicitanteInfoComponent', () => {
  let component: SolicitanteInfoComponent;
  let fixture: ComponentFixture<SolicitanteInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitanteInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SolicitanteInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
