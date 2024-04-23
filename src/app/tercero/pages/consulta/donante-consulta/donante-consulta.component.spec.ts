import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonanteConsultaComponent } from './donante-consulta.component';

describe('DonanteConsultaComponent', () => {
  let component: DonanteConsultaComponent;
  let fixture: ComponentFixture<DonanteConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonanteConsultaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DonanteConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
