import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})

export class ArticleComponent {
  @Input() article: any;  // Propriété pour recevoir l'article depuis le parent
  @Output() liked: EventEmitter<string> = new EventEmitter<string>();  // Événement pour émettre le titre liké

  likeArticle() {
    this.liked.emit(this.article.title);  // Émettre le titre de l'article liké
  }
}
