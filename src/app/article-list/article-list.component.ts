import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Article {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  image: string;
  likeCount: number;
  isPublished: boolean;
  categoryName: string;
  isLiked: boolean;
}

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.scss'
})

export class ArticleListComponent implements OnInit {
  articles: Article[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles(): void {
    this.http.get<Article[]>('http://localhost:3000/articles')
      .subscribe(data => {
        this.articles = data;
        console.log(data);
      });
  }
}