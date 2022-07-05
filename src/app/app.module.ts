import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { WritingsComponent } from './writings/writings.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { BookshelfComponent } from './bookshelf/bookshelf.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SitemapComponent } from './sitemap/sitemap.component';
import { LazyImageDirectiveDirective } from './portfolio/lazy-image-directive.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PortfolioComponent,
    WritingsComponent,
    HobbiesComponent,
    BookshelfComponent,
    PageNotFoundComponent,
    SitemapComponent,
    LazyImageDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
