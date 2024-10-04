import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<button [ngStyle]="{'background-color': backgroundColor, 'color': textColor, 'padding': padding}">
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
  
  isHovered: boolean = false;

  onMouseEnter() {
    this.isHovered = true;
  }

  onMouseLeave() {
    this.isHovered = false;
  }
}
