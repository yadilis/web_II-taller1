import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutoriasComponent } from './tutorias.component';

describe('TutoriasComponent', () => {
  let component: TutoriasComponent;
  let fixture: ComponentFixture<TutoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TutoriasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TutoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
