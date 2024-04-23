import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfermedadInfoComponent } from './enfermedad-info.component';

describe('EnfermedadInfoComponent', () => {
  let component: EnfermedadInfoComponent;
  let fixture: ComponentFixture<EnfermedadInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnfermedadInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnfermedadInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
