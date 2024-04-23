import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoRecursoFormComponent } from './tipo-recurso-form.component';

describe('TipoRecursoFormComponent', () => {
  let component: TipoRecursoFormComponent;
  let fixture: ComponentFixture<TipoRecursoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoRecursoFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TipoRecursoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
