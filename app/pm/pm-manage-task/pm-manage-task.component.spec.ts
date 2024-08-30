import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PMManageTaskComponent } from './pm-manage-task.component';

describe('PMManageTaskComponent', () => {
  let component: PMManageTaskComponent;
  let fixture: ComponentFixture<PMManageTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PMManageTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PMManageTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
