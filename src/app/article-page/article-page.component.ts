import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss'
})

export class ArticlePageComponent implements OnInit {
  articleId!: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.articleId = Number(this.route.snapshot.paramMap.get('id'));
  }
}
