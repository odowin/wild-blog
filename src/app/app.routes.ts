import { Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { StudentComponent } from './student/student.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'wcs/:nom', component: StudentComponent },
  { path: '**', component: NotFoundComponent } // Pour les routes non trouvées
];
