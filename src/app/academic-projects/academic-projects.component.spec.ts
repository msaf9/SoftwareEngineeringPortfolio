import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AcademicProjectsComponent } from './academic-projects.component';

describe('AcademicProjectsComponent', () => {
  let component: AcademicProjectsComponent;
  let fixture: ComponentFixture<AcademicProjectsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AcademicProjectsComponent],
      imports: [],
    }).compileComponents();

    fixture = TestBed.createComponent(AcademicProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
