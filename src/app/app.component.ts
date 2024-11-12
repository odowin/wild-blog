import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from "./button/button.component";
import { Comment } from '@angular/compiler';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'wild-blog';

  clickedButton: string = '';
  showMessage: boolean = false;

  onButtonClick(message: string) {
    this.clickedButton = message;
    this.showMessage = true; // Afficher le message lorsque le bouton est cliqué

    // Temporisation pour masquer le message après 3 secondes (3000 millisecondes)
    setTimeout(() => {
      this.showMessage = false;
    }, 1900); // 1900 ms = 1.9 secondes
  }
}
