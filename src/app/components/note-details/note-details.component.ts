import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Note } from '../../models/note.model';
import { NotesService } from '../../services/notes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

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
    private route: ActivatedRoute,
    private meta: Meta,
    private titleService: Title
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

    this.titleService.setTitle('Notes App - Notes Details');
    this.meta.updateTag({
      name: 'description',
      content: this.note.body,
    });
    this.meta.updateTag({
      name: 'keywords',
      content: 'Angular, SEO, JavaScript',
    });
    this.meta.updateTag({
      property: 'og:title',
      content: 'Notes App - Notes Details',
    });
    this.meta.updateTag({
      property: 'og:description',
      content: 'View note details.',
    });
    this.meta.updateTag({
      property: 'og:image',
      content: 'path/to/about-image.png',
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
