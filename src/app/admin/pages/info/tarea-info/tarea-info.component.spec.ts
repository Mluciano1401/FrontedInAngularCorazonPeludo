import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaInfoComponent } from './tarea-info.component';

describe('TareaInfoComponent', () => {
  let component: TareaInfoComponent;
  let fixture: ComponentFixture<TareaInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TareaInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TareaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
