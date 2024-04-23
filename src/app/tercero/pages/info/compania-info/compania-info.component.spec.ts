import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniaInfoComponent } from './compania-info.component';

describe('CompaniaInfoComponent', () => {
  let component: CompaniaInfoComponent;
  let fixture: ComponentFixture<CompaniaInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompaniaInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompaniaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
