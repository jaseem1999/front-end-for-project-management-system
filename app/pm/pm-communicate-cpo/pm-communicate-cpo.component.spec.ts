import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PMCommunicateCpoComponent } from './pm-communicate-cpo.component';

describe('PMCommunicateCpoComponent', () => {
  let component: PMCommunicateCpoComponent;
  let fixture: ComponentFixture<PMCommunicateCpoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PMCommunicateCpoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PMCommunicateCpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
