import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SintomaFormComponent } from './sintoma-form.component';

describe('SintomaFormComponent', () => {
  let component: SintomaFormComponent;
  let fixture: ComponentFixture<SintomaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SintomaFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SintomaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
