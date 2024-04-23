import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplicacionFormComponent } from './complicacion-form.component';

describe('ComplicacionFormComponent', () => {
  let component: ComplicacionFormComponent;
  let fixture: ComponentFixture<ComplicacionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComplicacionFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComplicacionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
