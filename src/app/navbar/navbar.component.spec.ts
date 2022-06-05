import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { By } from '@angular/platform-browser';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create navbar component', () => {
    expect(component).toBeTruthy();
  });

  // it('should call method navigateToUrl after click on addressLink', () => {
  //   fixture.detectChanges();
  //   const url = 'https://drive.google.com/file/d/1GwWOmqXaXU1eNWvFovibZ_bGNuRG4-FQ/view?usp=sharing';
  //   const spyNavigateToUrl = spyOn(component, 'navigateToUrl').and.callThrough();
  //   component.navigateToUrl(url);
  //   expect(spyNavigateToUrl).toHaveBeenCalled();
  // });

});
