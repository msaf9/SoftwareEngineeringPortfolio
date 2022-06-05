import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookshelfComponent } from './bookshelf.component';

describe('BookshelfComponent', () => {
  let component: BookshelfComponent;
  let fixture: ComponentFixture<BookshelfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookshelfComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookshelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test toggleShow', () => {
    component.showHide = false;
    component.isShown = true;
    component.toggleShow();
    expect(component.showHide).toBeTruthy();
    expect(component.isShown).toBeFalsy();
  });
});
