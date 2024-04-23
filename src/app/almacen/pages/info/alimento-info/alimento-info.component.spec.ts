import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimentoInfoComponent } from './alimento-info.component';

describe('AlimentoInfoComponent', () => {
  let component: AlimentoInfoComponent;
  let fixture: ComponentFixture<AlimentoInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlimentoInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlimentoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
