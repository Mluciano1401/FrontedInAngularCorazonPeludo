import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmacenInfoComponent } from './almacen-info.component';

describe('AlmacenInfoComponent', () => {
  let component: AlmacenInfoComponent;
  let fixture: ComponentFixture<AlmacenInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlmacenInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlmacenInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
