import { Component, OnInit } from '@angular/core';

/**
 * BookshelfComponent
 */
@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css'],
})
export class BookshelfComponent implements OnInit {
  /**
   * hidden by default
   */
  isShown: boolean = false;

  /**
   * show by default
   */
  showHide: boolean = true;

  /**
   * constructor is put into use to inject dependencies into the component class.
   */
  constructor() {}

  /**
   * ngOnInit is invoked only once when the directive is instantiated.
   */
  ngOnInit(): void {}

  /**
   * toggleShow method will switch the text to Show or Hide and will show or hide the HTML element respectively.
   */
  toggleShow(): void {
    this.showHide = !this.showHide;
    this.isShown = !this.isShown;
  }
}
