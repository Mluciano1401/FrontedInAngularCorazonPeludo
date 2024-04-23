import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoEmpresaFormComponent } from './tipo-empresa-form.component';

describe('TipoEmpresaFormComponent', () => {
  let component: TipoEmpresaFormComponent;
  let fixture: ComponentFixture<TipoEmpresaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoEmpresaFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TipoEmpresaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
