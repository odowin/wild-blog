import { Component } from '@angular/core';
import { ArticleComponent } from "../article/article.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ArticleComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})

export class HomePageComponent {
  articles = [
    { title: 'Article 1', content: 'Contenu de l\'article 1' },
    { title: 'Article 2', content: 'Contenu de l\'article 2' },
    { title: 'Article 3', content: 'Contenu de l\'article 3' }
  ];

  likedArticle: string | null = null; // Propriété pour stocker l'article liké

  onArticleLiked(title: string) {
    this.likedArticle = title; // Stocke le titre de l'article liké
  }
}
