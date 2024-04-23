import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaConsultaComponent } from './tarea-consulta.component';

describe('TareaConsultaComponent', () => {
  let component: TareaConsultaComponent;
  let fixture: ComponentFixture<TareaConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TareaConsultaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TareaConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
