import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  articles = [
    { id: 1, title: 'Article 1', content: 'Contenu de l\'article 1' },
    { id: 2, title: 'Article 2', content: 'Contenu de l\'article 2' },
    { id: 3, title: 'Article 3', content: 'Contenu de l\'article 3' }
  ];
}
