import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PMCommunicateTeamComponent } from './pm-communicate-team.component';

describe('PMCommunicateTeamComponent', () => {
  let component: PMCommunicateTeamComponent;
  let fixture: ComponentFixture<PMCommunicateTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PMCommunicateTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PMCommunicateTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
