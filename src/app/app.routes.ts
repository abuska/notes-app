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
      {
        path: '',
        loadComponent: () =>
          import('./components/notes-list/notes-list.component').then(
            (m) => m.NotesListComponent
          ),
      },
      {
        path: 'login',
        loadComponent: () =>
          import('./components/login-page/login-page.component').then(
            (m) => m.LoginPageComponent
          ),
      },
      {
        path: 'new',
        loadComponent: () =>
          import('./components/note-details/note-details.component').then(
            (m) => m.NoteDetailsComponent
          ),
      },
      {
        path: 'edit/:id',
        loadComponent: () =>
          import('./components/note-details/note-details.component').then(
            (m) => m.NoteDetailsComponent
          ),
      },
      {
        path: 'not-found',
        loadComponent: () =>
          import('./components/page-not-found/page-not-found.component').then(
            (m) => m.PageNotFoundComponent
          ),
      },
      { path: '**', redirectTo: '/not-found' },
    ],
  },
];
