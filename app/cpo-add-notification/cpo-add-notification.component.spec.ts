import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpoAddNotificationComponent } from './cpo-add-notification.component';

describe('CpoAddNotificationComponent', () => {
  let component: CpoAddNotificationComponent;
  let fixture: ComponentFixture<CpoAddNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpoAddNotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpoAddNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
