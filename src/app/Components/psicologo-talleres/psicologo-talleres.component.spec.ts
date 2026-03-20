import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsicologoTalleresComponent } from './psicologo-talleres.component';

describe('PsicologoTalleresComponent', () => {
  let component: PsicologoTalleresComponent;
  let fixture: ComponentFixture<PsicologoTalleresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PsicologoTalleresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PsicologoTalleresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
