import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PortfolioProjectsComponent } from './portfolio-projects.component';

describe('PortfolioProjectsComponent', () => {
  let component: PortfolioProjectsComponent;
  let fixture: ComponentFixture<PortfolioProjectsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PortfolioProjectsComponent],
      imports: [],
    }).compileComponents();

    fixture = TestBed.createComponent(PortfolioProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
