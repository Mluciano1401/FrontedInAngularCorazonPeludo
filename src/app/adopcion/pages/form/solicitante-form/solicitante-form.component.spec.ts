import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitanteFormComponent } from './solicitante-form.component';

describe('SolicitanteFormComponent', () => {
  let component: SolicitanteFormComponent;
  let fixture: ComponentFixture<SolicitanteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitanteFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SolicitanteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
