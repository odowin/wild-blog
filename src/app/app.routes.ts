<<<<<<< HEAD
import { Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { StudentComponent } from './student/student.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'wcs/:nom', component: StudentComponent },
  { path: '**', component: NotFoundComponent } // Pour les routes non trouvées
];
=======
// import { Routes } from '@angular/router';

// export const routes: Routes = [];

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ArticlePageComponent } from './article-page/article-page.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },  // Page d'accueil
  { path: 'article/:id', component: ArticlePageComponent },  // Page dynamique pour les articles
  { path: '**', component: NotFoundComponent },  // Page 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
>>>>>>> b69e8456692c33027709d238ee078dd8fd9ad65e
