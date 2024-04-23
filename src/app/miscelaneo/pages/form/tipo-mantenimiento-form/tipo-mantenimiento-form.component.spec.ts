import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoMantenimientoFormComponent } from './tipo-mantenimiento-form.component';

describe('TipoMantenimientoFormComponent', () => {
  let component: TipoMantenimientoFormComponent;
  let fixture: ComponentFixture<TipoMantenimientoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoMantenimientoFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TipoMantenimientoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
