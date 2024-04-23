import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoAlimentoFormComponent } from './tipo-alimento-form.component';

describe('TipoAlimentoFormComponent', () => {
  let component: TipoAlimentoFormComponent;
  let fixture: ComponentFixture<TipoAlimentoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoAlimentoFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TipoAlimentoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
