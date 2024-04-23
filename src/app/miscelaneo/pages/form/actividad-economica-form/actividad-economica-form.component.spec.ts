import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadEconomicaFormComponent } from './actividad-economica-form.component';

describe('ActividadEconomicaFormComponent', () => {
  let component: ActividadEconomicaFormComponent;
  let fixture: ComponentFixture<ActividadEconomicaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActividadEconomicaFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActividadEconomicaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
