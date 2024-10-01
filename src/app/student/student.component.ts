import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss'
})

export class StudentComponent implements OnInit {
  nomEtudiant: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Récupérer le paramètre 'nom' de l'URL
    this.route.paramMap.subscribe(params => {
      this.nomEtudiant = params.get('nom');
    });
  }
}
