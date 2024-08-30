import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PMSettingsComponent } from './pm-settings.component';

describe('PMSettingsComponent', () => {
  let component: PMSettingsComponent;
  let fixture: ComponentFixture<PMSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PMSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PMSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
