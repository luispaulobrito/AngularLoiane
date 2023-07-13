import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaNgswitchcaseComponent } from './diretiva-ngswitchcase.component';

describe('DiretivaNgswitchcaseComponent', () => {
  let component: DiretivaNgswitchcaseComponent;
  let fixture: ComponentFixture<DiretivaNgswitchcaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiretivaNgswitchcaseComponent]
    });
    fixture = TestBed.createComponent(DiretivaNgswitchcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
