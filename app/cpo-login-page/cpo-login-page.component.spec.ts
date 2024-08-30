import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpoLoginPageComponent } from './cpo-login-page.component';

describe('CpoLoginPageComponent', () => {
  let component: CpoLoginPageComponent;
  let fixture: ComponentFixture<CpoLoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpoLoginPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpoLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
