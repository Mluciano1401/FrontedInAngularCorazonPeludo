import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrigenFormComponent } from './origen-form.component';

describe('OrigenFormComponent', () => {
  let component: OrigenFormComponent;
  let fixture: ComponentFixture<OrigenFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrigenFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrigenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
