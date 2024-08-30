import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpoViewProjectComponent } from './cpo-view-project.component';

describe('CpoViewProjectComponent', () => {
  let component: CpoViewProjectComponent;
  let fixture: ComponentFixture<CpoViewProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpoViewProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpoViewProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
