import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SintomaInfoComponent } from './sintoma-info.component';

describe('SintomaInfoComponent', () => {
  let component: SintomaInfoComponent;
  let fixture: ComponentFixture<SintomaInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SintomaInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SintomaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
