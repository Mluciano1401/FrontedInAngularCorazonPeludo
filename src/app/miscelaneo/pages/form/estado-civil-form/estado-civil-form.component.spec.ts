import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoCivilFormComponent } from './estado-civil-form.component';

describe('EstadoCivilFormComponent', () => {
  let component: EstadoCivilFormComponent;
  let fixture: ComponentFixture<EstadoCivilFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstadoCivilFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstadoCivilFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
