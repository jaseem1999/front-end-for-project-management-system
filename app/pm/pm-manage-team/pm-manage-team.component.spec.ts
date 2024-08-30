import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PMManageTeamComponent } from './pm-manage-team.component';

describe('PMManageTeamComponent', () => {
  let component: PMManageTeamComponent;
  let fixture: ComponentFixture<PMManageTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PMManageTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PMManageTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
