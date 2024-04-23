import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucursalConsultaComponent } from './sucursal-consulta.component';

describe('SucursalConsultaComponent', () => {
  let component: SucursalConsultaComponent;
  let fixture: ComponentFixture<SucursalConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SucursalConsultaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SucursalConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
