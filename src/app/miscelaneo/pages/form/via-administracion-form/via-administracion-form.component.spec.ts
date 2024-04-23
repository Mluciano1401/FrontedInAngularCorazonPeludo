import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViaAdministracionFormComponent } from './via-administracion-form.component';

describe('ViaAdministracionFormComponent', () => {
  let component: ViaAdministracionFormComponent;
  let fixture: ComponentFixture<ViaAdministracionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViaAdministracionFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViaAdministracionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
