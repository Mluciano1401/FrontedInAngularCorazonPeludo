import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucursalInfoComponent } from './sucursal-info.component';

describe('SucursalInfoComponent', () => {
  let component: SucursalInfoComponent;
  let fixture: ComponentFixture<SucursalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SucursalInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SucursalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
