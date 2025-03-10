import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaTutorComponent } from './tabla-tutor.component';

describe('TablaTutorComponent', () => {
  let component: TablaTutorComponent;
  let fixture: ComponentFixture<TablaTutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaTutorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablaTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
