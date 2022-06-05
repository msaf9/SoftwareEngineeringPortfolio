import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css']
})
export class BookshelfComponent implements OnInit {

  isShown: boolean = false; // hidden by default
  showHide: boolean = true; // show by default

  constructor() { }

  ngOnInit(): void {
  }

  toggleShow(): void {
    this.showHide = !this.showHide;
    this.isShown = !this.isShown;
  }

}
