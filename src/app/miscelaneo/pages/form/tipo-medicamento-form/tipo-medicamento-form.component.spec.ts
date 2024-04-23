import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoMedicamentoFormComponent } from './tipo-medicamento-form.component';

describe('TipoMedicamentoFormComponent', () => {
  let component: TipoMedicamentoFormComponent;
  let fixture: ComponentFixture<TipoMedicamentoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoMedicamentoFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TipoMedicamentoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
