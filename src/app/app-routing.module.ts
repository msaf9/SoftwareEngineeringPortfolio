import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcademicProjectsComponent } from './academic-projects/academic-projects.component';
import { BookshelfComponent } from './bookshelf/bookshelf.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PortfolioProjectsComponent } from './portfolio-projects/portfolio-projects.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SitemapComponent } from './sitemap/sitemap.component';
import { WritingsComponent } from './writings/writings.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    children: [
      { path: '', redirectTo: '/portfolio/sideline', pathMatch: 'full' },
      { path: 'sideline', component: PortfolioProjectsComponent },
      { path: 'academic', component: AcademicProjectsComponent },
    ],
  },
  { path: 'writings', component: WritingsComponent },
  { path: 'hobbies', component: HobbiesComponent },
  { path: 'bookshelf', component: BookshelfComponent },
  { path: 'sitemap', component: SitemapComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
