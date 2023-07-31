import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskLstComponent } from './task-lst.component';

describe('TaskLstComponent', () => {
  let component: TaskLstComponent;
  let fixture: ComponentFixture<TaskLstComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskLstComponent]
    });
    fixture = TestBed.createComponent(TaskLstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
