import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentoConsultaComponent } from './medicamento-consulta.component';

describe('MedicamentoConsultaComponent', () => {
  let component: MedicamentoConsultaComponent;
  let fixture: ComponentFixture<MedicamentoConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicamentoConsultaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedicamentoConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
