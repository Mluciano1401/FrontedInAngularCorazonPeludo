import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoAnimalFormComponent } from './tipo-animal-form.component';

describe('TipoAnimalFormComponent', () => {
  let component: TipoAnimalFormComponent;
  let fixture: ComponentFixture<TipoAnimalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoAnimalFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TipoAnimalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
