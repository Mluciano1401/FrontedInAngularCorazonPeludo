import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoEnfermedadFormComponent } from './tipo-enfermedad-form.component';

describe('TipoEnfermedadFormComponent', () => {
  let component: TipoEnfermedadFormComponent;
  let fixture: ComponentFixture<TipoEnfermedadFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoEnfermedadFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TipoEnfermedadFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
