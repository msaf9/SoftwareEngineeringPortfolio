import { Component, OnInit } from '@angular/core';

/**
 * HomeComponent
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  /**
   * constructor is put into use to inject dependencies into the component class.
   */
  constructor() { }

  /**
  * ngOnInit is invoked only once when the directive is instantiated.
  */
  ngOnInit(): void {
  }

}
