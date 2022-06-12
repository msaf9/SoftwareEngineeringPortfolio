import { Component, OnInit } from '@angular/core';

/**
 * HobbiesComponent
 */
@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {

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
