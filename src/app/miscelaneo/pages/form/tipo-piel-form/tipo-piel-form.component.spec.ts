import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoPielFormComponent } from './tipo-piel-form.component';

describe('TipoPielFormComponent', () => {
  let component: TipoPielFormComponent;
  let fixture: ComponentFixture<TipoPielFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoPielFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TipoPielFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
