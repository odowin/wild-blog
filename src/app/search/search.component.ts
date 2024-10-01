import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})

export class SearchComponent {
  studentName: string = '';

  constructor(private router: Router) {}

  searchStudent() {
    this.router.navigate(['/wcs', this.studentName]);
  }
}
