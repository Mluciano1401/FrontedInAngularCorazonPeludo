import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoCombustibleFormComponent } from './tipo-combustible-form.component';

describe('TipoCombustibleFormComponent', () => {
  let component: TipoCombustibleFormComponent;
  let fixture: ComponentFixture<TipoCombustibleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoCombustibleFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TipoCombustibleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
