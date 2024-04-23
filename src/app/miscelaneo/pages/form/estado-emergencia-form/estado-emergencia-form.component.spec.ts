import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoEmergenciaFormComponent } from './estado-emergencia-form.component';

describe('EstadoEmergenciaFormComponent', () => {
  let component: EstadoEmergenciaFormComponent;
  let fixture: ComponentFixture<EstadoEmergenciaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstadoEmergenciaFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstadoEmergenciaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
