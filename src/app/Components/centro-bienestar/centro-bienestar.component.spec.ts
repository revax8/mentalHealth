import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroBienestarComponent } from './centro-bienestar.component';

describe('CentroBienestarComponent', () => {
  let component: CentroBienestarComponent;
  let fixture: ComponentFixture<CentroBienestarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CentroBienestarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentroBienestarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
