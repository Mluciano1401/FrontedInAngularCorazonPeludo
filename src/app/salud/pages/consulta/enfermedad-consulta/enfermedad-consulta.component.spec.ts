import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfermedadConsultaComponent } from './enfermedad-consulta.component';

describe('EnfermedadConsultaComponent', () => {
  let component: EnfermedadConsultaComponent;
  let fixture: ComponentFixture<EnfermedadConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnfermedadConsultaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnfermedadConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
