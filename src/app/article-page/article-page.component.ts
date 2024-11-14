import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from '../models/article.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss'
})
export class ArticlePageComponent implements OnInit {
  article: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    // Récupère l'ID de l'article depuis l'URL
    const articleId = this.route.snapshot.paramMap.get('id');

    // Fait une requête HTTP pour récupérer les détails de l'article
    this.http.get(`http://localhost:3000/articles/${articleId}`).subscribe((data) => {
      this.article = data;
      console.log(data);
    });
  }
}
