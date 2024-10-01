import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `<h1>Page non trouvée. Redirection vers la page d'accueil...</h1>`,
  standalone: true,
  imports: [],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})

export class NotFoundComponent {}

