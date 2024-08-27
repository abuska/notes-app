import { NgFor } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(private notesService: NotesService, private router: Router) {}

  ngOnInit(): void {
    this.notes = this.notesService.getAllFiltered();
  }

  btnClick() {
    console.log('Button clicked');
    this.router.navigateByUrl('/new');
  }

  onSearchChange(event: Event) {
    console.log(
      'Search text changed:',
      (event.target as HTMLInputElement).value
    );
    const searchText = (event.target as HTMLInputElement).value;
    this.notesService.updateSearchText(searchText);
    this.notes = this.notesService.getAllFiltered();
  }
}
