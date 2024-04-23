import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonacionFormComponent } from './donacion-form.component';

describe('DonacionFormComponent', () => {
  let component: DonacionFormComponent;
  let fixture: ComponentFixture<DonacionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonacionFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DonacionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
