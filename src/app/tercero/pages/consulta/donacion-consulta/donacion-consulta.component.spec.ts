import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonacionConsultaComponent } from './donacion-consulta.component';

describe('DonacionConsultaComponent', () => {
  let component: DonacionConsultaComponent;
  let fixture: ComponentFixture<DonacionConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonacionConsultaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DonacionConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
