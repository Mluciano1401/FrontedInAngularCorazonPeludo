import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoLugarFormComponent } from './estado-lugar-form.component';

describe('EstadoLugarFormComponent', () => {
  let component: EstadoLugarFormComponent;
  let fixture: ComponentFixture<EstadoLugarFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstadoLugarFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstadoLugarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
