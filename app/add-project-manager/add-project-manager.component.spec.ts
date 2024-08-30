import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectManagerComponent } from './add-project-manager.component';

describe('AddProjectManagerComponent', () => {
  let component: AddProjectManagerComponent;
  let fixture: ComponentFixture<AddProjectManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProjectManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProjectManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
