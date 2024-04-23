import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitanteConsultaComponent } from './solicitante-consulta.component';

describe('SolicitanteConsultaComponent', () => {
  let component: SolicitanteConsultaComponent;
  let fixture: ComponentFixture<SolicitanteConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitanteConsultaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SolicitanteConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
