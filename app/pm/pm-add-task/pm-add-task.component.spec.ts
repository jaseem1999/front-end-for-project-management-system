import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PMAddTaskComponent } from './pm-add-task.component';

describe('PMAddTaskComponent', () => {
  let component: PMAddTaskComponent;
  let fixture: ComponentFixture<PMAddTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PMAddTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PMAddTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
