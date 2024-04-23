import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoInfoComponent } from './mantenimiento-info.component';

describe('MantenimientoInfoComponent', () => {
  let component: MantenimientoInfoComponent;
  let fixture: ComponentFixture<MantenimientoInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MantenimientoInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MantenimientoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
