import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimentoConsultaComponent } from './alimento-consulta.component';

describe('AlimentoConsultaComponent', () => {
  let component: AlimentoConsultaComponent;
  let fixture: ComponentFixture<AlimentoConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlimentoConsultaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlimentoConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
