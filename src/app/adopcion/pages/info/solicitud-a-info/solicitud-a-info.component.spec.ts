import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudAInfoComponent } from './solicitud-a-info.component';

describe('SolicitudAInfoComponent', () => {
  let component: SolicitudAInfoComponent;
  let fixture: ComponentFixture<SolicitudAInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitudAInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SolicitudAInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
