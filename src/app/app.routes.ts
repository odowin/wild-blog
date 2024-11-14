import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticlePageComponent } from './article-page/article-page.component';

export const routes: Routes = [
  { path: 'articles', component: ArticleListComponent },
  { path: 'articles/:id', component: ArticlePageComponent },
  { path: '', redirectTo: '/articles', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
