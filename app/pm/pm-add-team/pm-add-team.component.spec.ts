import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PMAddTeamComponent } from './pm-add-team.component';

describe('PMAddTeamComponent', () => {
  let component: PMAddTeamComponent;
  let fixture: ComponentFixture<PMAddTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PMAddTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PMAddTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
