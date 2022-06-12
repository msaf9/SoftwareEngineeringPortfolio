import { Component, OnInit } from '@angular/core';

/**
 * NavbarComponent
 */
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  /**
   * constructor is put into use to inject dependencies into the component class.
   */
  constructor() { }

  /**
  * ngOnInit is invoked only once when the directive is instantiated.
  */
  ngOnInit(): void {
  }

  // navigateToUrl(url: string) {
  //   window.open(url, "_blank");
  // }

}
