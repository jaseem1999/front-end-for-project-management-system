import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpoHomeComponent } from './cpo-home.component';

describe('CpoHomeComponent', () => {
  let component: CpoHomeComponent;
  let fixture: ComponentFixture<CpoHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpoHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
