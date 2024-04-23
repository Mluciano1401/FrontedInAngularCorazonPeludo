import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonacionInfoComponent } from './donacion-info.component';

describe('DonacionInfoComponent', () => {
  let component: DonacionInfoComponent;
  let fixture: ComponentFixture<DonacionInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonacionInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DonacionInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
