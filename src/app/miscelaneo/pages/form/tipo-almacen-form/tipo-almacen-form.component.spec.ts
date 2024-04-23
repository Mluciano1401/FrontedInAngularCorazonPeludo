import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoAlmacenFormComponent } from './tipo-almacen-form.component';

describe('TipoAlmacenFormComponent', () => {
  let component: TipoAlmacenFormComponent;
  let fixture: ComponentFixture<TipoAlmacenFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoAlmacenFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TipoAlmacenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
