import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PMHomeMainComponent } from './pm-home-main.component';

describe('PMHomeMainComponent', () => {
  let component: PMHomeMainComponent;
  let fixture: ComponentFixture<PMHomeMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PMHomeMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PMHomeMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
