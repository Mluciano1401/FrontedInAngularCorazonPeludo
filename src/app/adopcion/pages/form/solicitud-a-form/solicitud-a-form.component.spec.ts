import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudAFormComponent } from './solicitud-a-form.component';

describe('SolicitudAFormComponent', () => {
  let component: SolicitudAFormComponent;
  let fixture: ComponentFixture<SolicitudAFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitudAFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SolicitudAFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
