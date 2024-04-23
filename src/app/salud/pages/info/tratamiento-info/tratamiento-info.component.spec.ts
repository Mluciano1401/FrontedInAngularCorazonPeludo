import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TratamientoInfoComponent } from './tratamiento-info.component';

describe('TratamientoInfoComponent', () => {
  let component: TratamientoInfoComponent;
  let fixture: ComponentFixture<TratamientoInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TratamientoInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TratamientoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
