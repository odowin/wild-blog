import { Component, OnInit, inject } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { Article } from '../models/article.model';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.scss'
})
export class ArticleListComponent implements OnInit {

  articles: Article[] = [];

  // constructor(private articlesService: ArticlesService) { } Merci le J
  private articlesService = inject(ArticlesService);

  ngOnInit(): void {
    // Récupère la liste des articles
    this.articlesService.getArticles().subscribe((data: Article[]) => {
      this.articles = data;
    });
  }
}