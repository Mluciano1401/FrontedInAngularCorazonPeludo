import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudInfoComponent } from './solicitud-info.component';

describe('SolicitudInfoComponent', () => {
  let component: SolicitudInfoComponent;
  let fixture: ComponentFixture<SolicitudInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitudInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SolicitudInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
