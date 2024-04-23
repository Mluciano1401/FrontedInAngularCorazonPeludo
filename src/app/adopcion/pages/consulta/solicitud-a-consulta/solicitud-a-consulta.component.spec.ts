import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudAConsultaComponent } from './solicitud-a-consulta.component';

describe('SolicitudAConsultaComponent', () => {
  let component: SolicitudAConsultaComponent;
  let fixture: ComponentFixture<SolicitudAConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitudAConsultaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SolicitudAConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
