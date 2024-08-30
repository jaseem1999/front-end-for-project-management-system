import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpoHomeSecondComponent } from './cpo-home-second.component';

describe('CpoHomeSecondComponent', () => {
  let component: CpoHomeSecondComponent;
  let fixture: ComponentFixture<CpoHomeSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpoHomeSecondComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpoHomeSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
