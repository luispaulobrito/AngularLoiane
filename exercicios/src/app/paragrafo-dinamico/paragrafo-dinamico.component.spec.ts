import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagrafoDinamicoComponent } from './paragrafo-dinamico.component';

describe('ParagrafoDinamicoComponent', () => {
  let component: ParagrafoDinamicoComponent;
  let fixture: ComponentFixture<ParagrafoDinamicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParagrafoDinamicoComponent]
    });
    fixture = TestBed.createComponent(ParagrafoDinamicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
