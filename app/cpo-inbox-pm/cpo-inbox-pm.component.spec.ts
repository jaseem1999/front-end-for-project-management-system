import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpoInboxPmComponent } from './cpo-inbox-pm.component';

describe('CpoInboxPmComponent', () => {
  let component: CpoInboxPmComponent;
  let fixture: ComponentFixture<CpoInboxPmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpoInboxPmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpoInboxPmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
