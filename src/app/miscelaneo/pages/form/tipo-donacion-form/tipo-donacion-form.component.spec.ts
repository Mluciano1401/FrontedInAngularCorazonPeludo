import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoDonacionFormComponent } from './tipo-donacion-form.component';

describe('TipoDonacionFormComponent', () => {
  let component: TipoDonacionFormComponent;
  let fixture: ComponentFixture<TipoDonacionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoDonacionFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TipoDonacionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
