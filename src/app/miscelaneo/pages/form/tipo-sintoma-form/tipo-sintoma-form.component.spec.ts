import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoSintomaFormComponent } from './tipo-sintoma-form.component';

describe('TipoSintomaFormComponent', () => {
  let component: TipoSintomaFormComponent;
  let fixture: ComponentFixture<TipoSintomaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoSintomaFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TipoSintomaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
