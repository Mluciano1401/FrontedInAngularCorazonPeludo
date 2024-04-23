import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplejidadFormComponent } from './complejidad-form.component';

describe('ComplejidadFormComponent', () => {
  let component: ComplejidadFormComponent;
  let fixture: ComponentFixture<ComplejidadFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComplejidadFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComplejidadFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
