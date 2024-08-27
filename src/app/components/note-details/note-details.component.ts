import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Note } from '../../models/note.model';
import { NotesService } from '../../services/notes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-note-details',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './note-details.component.html',
  styleUrl: './note-details.component.scss',
})
export class NoteDetailsComponent implements OnInit {
  note!: Note;
  noteId!: number;
  new!: boolean;

  constructor(
    private notesService: NotesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.note = new Note();
    this.route.params.subscribe((params) => {
      let id = +params['id'];
      let note = this.notesService.get(id);
      if (id != null && note) {
        this.note = note;
        this.noteId = +params['id'];
        this.new = false;
      } else {
        this.new = true;
      }
    });
  }

  onSubmit(form: NgForm) {
    if (this.new) {
      this.notesService.add(form.value);
    } else {
      this.notesService.update(this.noteId, form.value);
    }
    this.navigateToList();
  }
  onCancel() {
    this.navigateToList();
  }

  navigateToList() {
    this.router.navigateByUrl('/');
  }
}
