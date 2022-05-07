import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portfolio';

  visitedRoute = '/';
  URLS = ['/home', '/portfolio', '/writings', '/hobbies', '/bookshelf'];

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    this.router.events.subscribe(async (routes) => {
      if (routes instanceof NavigationEnd) {
        this.visitedRoute = this.router.url;
      }
      this.visitedRoute = this.router.url;
      if (this.visitedRoute !== this.router.url) {
        this.visitedRoute = this.router.url;
      }
    });
  }

  isVisited(url: string): boolean {
    console.log(this.URLS.every(urls => urls === url));
    return this.URLS.every(urls => urls !== url);
  }

  offNavbarOnPageNotFound(): boolean {
    return !this.isVisited(this.visitedRoute);
  }

}
