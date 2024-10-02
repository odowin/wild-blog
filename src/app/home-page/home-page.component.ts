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
    { title: 'Premier article', content: 'Contenu du premier article.' },
    { title: 'Deuxième article', content: 'Contenu du deuxième article.' },
    { title: 'Troisième article', content: 'Contenu du troisième article.' }
  ];
}
