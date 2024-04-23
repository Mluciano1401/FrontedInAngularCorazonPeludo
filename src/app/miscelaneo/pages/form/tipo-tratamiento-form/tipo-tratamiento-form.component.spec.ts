import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoTratamientoFormComponent } from './tipo-tratamiento-form.component';

describe('TipoTratamientoFormComponent', () => {
  let component: TipoTratamientoFormComponent;
  let fixture: ComponentFixture<TipoTratamientoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoTratamientoFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TipoTratamientoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
