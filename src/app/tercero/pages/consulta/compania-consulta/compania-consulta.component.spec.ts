import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniaConsultaComponent } from './compania-consulta.component';

describe('CompaniaConsultaComponent', () => {
  let component: CompaniaConsultaComponent;
  let fixture: ComponentFixture<CompaniaConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompaniaConsultaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompaniaConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
