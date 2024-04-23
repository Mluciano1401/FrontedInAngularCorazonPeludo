import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoPersonaFormComponent } from './tipo-persona-form.component';

describe('TipoPersonaFormComponent', () => {
  let component: TipoPersonaFormComponent;
  let fixture: ComponentFixture<TipoPersonaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoPersonaFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TipoPersonaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
