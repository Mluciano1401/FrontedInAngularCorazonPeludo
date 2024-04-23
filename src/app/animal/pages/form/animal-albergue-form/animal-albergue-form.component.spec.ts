import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalAlbergueFormComponent } from './animal-albergue-form.component';

describe('AnimalAlbergueFormComponent', () => {
  let component: AnimalAlbergueFormComponent;
  let fixture: ComponentFixture<AnimalAlbergueFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimalAlbergueFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnimalAlbergueFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
