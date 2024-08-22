import { Component, Input, OnInit } from '@angular/core';
import { NoteCardComponent } from '../note-card/note-card.component';
import { NgFor } from '@angular/common';
import { Note } from '../../models/note.model';
import { NotesService } from '../../services/notes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes-list',
  standalone: true,
  imports: [NoteCardComponent, NgFor],
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.scss',
})
export class NotesListComponent implements OnInit {
  notes: Note[] = new Array<Note>();

  @Input() input: string = '';

  constructor(private notesService: NotesService, private router: Router) {}

  ngOnInit(): void {
    this.notes = this.notesService.getAllFiltered();
  }

  btnClick() {
    console.log('Button clicked');
    this.router.navigateByUrl('/new');
  }

  onSearchChange() {
    console.log('Search text changed:', this.input);
    //this.notesService.updateSearchText(searchText);
    this.notes = this.notesService.getAllFiltered();
  }
}
