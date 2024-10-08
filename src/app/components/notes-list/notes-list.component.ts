import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, debounceTime } from 'rxjs';
import { Note } from '../../models/note.model';
import { NotesService } from '../../services/notes.service';
import { NoteCardComponent } from '../note-card/note-card.component';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-notes-list',
  standalone: true,
  imports: [NoteCardComponent, NgFor, FormsModule],
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.scss',
})
export class NotesListComponent implements OnInit {
  notes: Note[] = new Array<Note>();
  searchText = new Subject<string>();

  constructor(
    private notesService: NotesService,
    private router: Router,
    private meta: Meta,
    private titleService: Title
  ) {
    this.searchText.pipe(debounceTime(300)).subscribe((value) => {
      this.notes = this.notesService.getAllFiltered(value);
    });
  }

  ngOnInit(): void {
    this.notes = this.notesService.getAll();

    this.titleService.setTitle('Notes App - Notes List');
    this.meta.updateTag({
      name: 'description',
      content: 'View all notes.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content: 'Angular, SEO, JavaScript',
    });
    this.meta.updateTag({
      property: 'og:title',
      content: 'Notes App - Notes List',
    });
    this.meta.updateTag({
      property: 'og:description',
      content: 'View all notes.',
    });
    this.meta.updateTag({
      property: 'og:image',
      content: 'path/to/about-image.png',
    });
  }

  btnClick() {
    console.log('Button clicked');
    this.router.navigateByUrl('/new');
  }

  onSearchChange(event: Event) {
    this.searchText.next((event.target as HTMLInputElement).value);
  }
}
