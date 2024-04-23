import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoTelefonoFormComponent } from './tipo-telefono-form.component';

describe('TipoTelefonoFormComponent', () => {
  let component: TipoTelefonoFormComponent;
  let fixture: ComponentFixture<TipoTelefonoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoTelefonoFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TipoTelefonoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
