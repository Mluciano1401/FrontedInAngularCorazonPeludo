import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmacenConsultaComponent } from './almacen-consulta.component';

describe('AlmacenConsultaComponent', () => {
  let component: AlmacenConsultaComponent;
  let fixture: ComponentFixture<AlmacenConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlmacenConsultaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlmacenConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
