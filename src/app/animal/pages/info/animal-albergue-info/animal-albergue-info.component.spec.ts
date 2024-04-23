import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalAlbergueInfoComponent } from './animal-albergue-info.component';

describe('AnimalAlbergueInfoComponent', () => {
  let component: AnimalAlbergueInfoComponent;
  let fixture: ComponentFixture<AnimalAlbergueInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimalAlbergueInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnimalAlbergueInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
