import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, debounceTime } from 'rxjs';
import { Note } from '../../models/note.model';
import { NotesService } from '../../services/notes.service';
import { NoteCardComponent } from '../note-card/note-card.component';

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

  constructor(private notesService: NotesService, private router: Router) {
    this.searchText.pipe(debounceTime(300)).subscribe((value) => {
      this.notes = this.notesService.getAllFiltered(value);
    });
  }

  ngOnInit(): void {
    this.notes = this.notesService.getAll();
  }

  btnClick() {
    console.log('Button clicked');
    this.router.navigateByUrl('/new');
  }

  onSearchChange(event: Event) {
    this.searchText.next((event.target as HTMLInputElement).value);
  }
}
