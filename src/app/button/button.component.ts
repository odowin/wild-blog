import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  template: `<button (click)="onClick()" [ngStyle]="{'background-color': backgroundColor, 'color': textColor, 'padding': padding}">
               {{ label }}
             </button>`,
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})

export class ButtonComponent {
  @Input() backgroundColor: string = 'transparent';  // Dynamic background color
  @Input() textColor: string = '#000';               // Dynamic text color
  @Input() padding: string = '10px';                 // Dynamic padding
  @Input() label: string = 'Button';                 // Button label
  @Input() hoverColor: string = 'grey'; // <- Ajoute cette ligne
  @Output() buttonClick: EventEmitter<string> = new EventEmitter<string>(); // EventEmitter pour émettre l'événement au parent
  
  isHovered: boolean = false;

  onMouseEnter() {
    this.isHovered = true;
  }

  onMouseLeave() {
    this.isHovered = false;
  }

  onClick() {
    this.buttonClick.emit(this.label + ' a été cliqué');
  }
}



// @Component({
//   selector: 'app-button',
//   template: `
//     <button (click)="onClick()">{{ buttonText }}</button>
//   `,
//   styles: []
// })
// export class ButtonComponent {
//   @Input() buttonText: string = ''; // Propriété pour le texte du bouton reçu en input
//   @Output() buttonClick: EventEmitter<string> = new EventEmitter<string>(); // EventEmitter pour émettre l'événement au parent

//   onClick() {
//     this.buttonClick.emit(this.buttonText + ' a été cliqué');
//   }
// }
