import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from './models/article.model'; // Assure-toi d'avoir un modèle pour les articles

@Injectable({
  providedIn: 'root' // Le service est disponible partout dans l'application
})
export class ArticlesService {

  private apiUrl = 'http://localhost:3000/articles'; // L'URL de ton API

  constructor(private http: HttpClient) { }

  // Méthode pour récupérer tous les articles
  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.apiUrl);
  }

  // Méthode pour récupérer un article spécifique par ID
  getArticleById(id: number): Observable<Article> {
    return this.http.get<Article>(`${this.apiUrl}/${id}`);
  }
}
