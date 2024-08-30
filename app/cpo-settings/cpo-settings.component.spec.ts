import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpoSettingsComponent } from './cpo-settings.component';

describe('CpoSettingsComponent', () => {
  let component: CpoSettingsComponent;
  let fixture: ComponentFixture<CpoSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpoSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpoSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
