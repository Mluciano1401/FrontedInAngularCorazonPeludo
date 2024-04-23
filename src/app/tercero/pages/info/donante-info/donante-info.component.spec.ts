import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonanteInfoComponent } from './donante-info.component';

describe('DonanteInfoComponent', () => {
  let component: DonanteInfoComponent;
  let fixture: ComponentFixture<DonanteInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonanteInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DonanteInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
