import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoAmputacionFormComponent } from './tipo-amputacion-form.component';

describe('TipoAmputacionFormComponent', () => {
  let component: TipoAmputacionFormComponent;
  let fixture: ComponentFixture<TipoAmputacionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoAmputacionFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TipoAmputacionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
