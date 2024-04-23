import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedorInfoComponent } from './proveedor-info.component';

describe('ProveedorInfoComponent', () => {
  let component: ProveedorInfoComponent;
  let fixture: ComponentFixture<ProveedorInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProveedorInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProveedorInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
