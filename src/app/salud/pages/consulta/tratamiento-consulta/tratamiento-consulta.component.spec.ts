import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TratamientoConsultaComponent } from './tratamiento-consulta.component';

describe('TratamientoConsultaComponent', () => {
  let component: TratamientoConsultaComponent;
  let fixture: ComponentFixture<TratamientoConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TratamientoConsultaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TratamientoConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
