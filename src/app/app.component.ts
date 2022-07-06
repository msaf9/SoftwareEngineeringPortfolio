import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';

/**
 * AppComponent
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  /**
   * Value of the title
   */
  title = 'Portfolio';

  /**
   * Root of the Visited Route
   */
  visitedRoute = '/';

  /**
   * URLs with active Navigation bar 
   */
  URLS = ['/home', '/portfolio', '/writings', '/hobbies', '/bookshelf', '/sitemap'];

  /**
   * 
   * @param router 
   */
  constructor(private router: Router) {

  }

  /**
   * ngOnInit is invoked only once when the directive is instantiated.
   */
  ngOnInit(): void {
    /**
     * Get information of the visited Route
     */
    this.router.events.subscribe(async (routes) => {
      if (routes instanceof NavigationEnd) {
        this.visitedRoute = this.router.url;
      }
      this.visitedRoute = this.router.url;
      /**
       * Fetch the value of Router URL
       */
      if (this.visitedRoute !== this.router.url) {
        this.visitedRoute = this.router.url;
      }
    });
  }

  /**
   * 
   * @param url 
   * @returns boolean 
   */
  isVisited(url: string): boolean {
    return this.URLS.every(urls => urls !== url);
  }

  /**
   * 
   * @returns boolean
   */
  offNavbarOnPageNotFound(): boolean {
    return !this.isVisited(this.visitedRoute);
  }

}
