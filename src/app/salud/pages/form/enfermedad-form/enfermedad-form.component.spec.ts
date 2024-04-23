import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfermedadFormComponent } from './enfermedad-form.component';

describe('EnfermedadFormComponent', () => {
  let component: EnfermedadFormComponent;
  let fixture: ComponentFixture<EnfermedadFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnfermedadFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnfermedadFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
