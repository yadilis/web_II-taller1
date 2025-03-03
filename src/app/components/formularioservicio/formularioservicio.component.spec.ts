import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioservicioComponent } from './formularioservicio.component';

describe('FormularioservicioComponent', () => {
  let component: FormularioservicioComponent;
  let fixture: ComponentFixture<FormularioservicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioservicioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioservicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
