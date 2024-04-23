import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SintomaConsultaComponent } from './sintoma-consulta.component';

describe('SintomaConsultaComponent', () => {
  let component: SintomaConsultaComponent;
  let fixture: ComponentFixture<SintomaConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SintomaConsultaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SintomaConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
