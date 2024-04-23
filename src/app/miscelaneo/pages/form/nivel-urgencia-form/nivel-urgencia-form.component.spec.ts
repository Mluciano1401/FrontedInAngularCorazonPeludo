import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelUrgenciaFormComponent } from './nivel-urgencia-form.component';

describe('NivelUrgenciaFormComponent', () => {
  let component: NivelUrgenciaFormComponent;
  let fixture: ComponentFixture<NivelUrgenciaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NivelUrgenciaFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NivelUrgenciaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
