import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PMHomeComponent } from './pmhome.component';

describe('PMHomeComponent', () => {
  let component: PMHomeComponent;
  let fixture: ComponentFixture<PMHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PMHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PMHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
