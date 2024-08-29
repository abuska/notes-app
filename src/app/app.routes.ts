import { Routes } from '@angular/router';
import { NotesListComponent } from './components/notes-list/notes-list.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { NoteDetailsComponent } from './components/note-details/note-details.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: NotesListComponent },
      { path: 'login', component: LoginPageComponent },
      { path: 'new', component: NoteDetailsComponent },
      { path: 'edit/:id', component: NoteDetailsComponent },
      { path: 'not-found', component: PageNotFoundComponent },
      { path: '**', redirectTo: '/not-found' },
    ],
  },
];
