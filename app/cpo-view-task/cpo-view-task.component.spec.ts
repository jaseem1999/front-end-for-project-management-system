import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpoViewTaskComponent } from './cpo-view-task.component';

describe('CpoViewTaskComponent', () => {
  let component: CpoViewTaskComponent;
  let fixture: ComponentFixture<CpoViewTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpoViewTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpoViewTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
