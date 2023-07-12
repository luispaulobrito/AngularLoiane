import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaNgifParagrafoComponent } from './diretiva-ngif-paragrafo.component';

describe('DiretivaNgifParagrafoComponent', () => {
  let component: DiretivaNgifParagrafoComponent;
  let fixture: ComponentFixture<DiretivaNgifParagrafoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiretivaNgifParagrafoComponent]
    });
    fixture = TestBed.createComponent(DiretivaNgifParagrafoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
