import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-note-card',
  standalone: true,
  imports: [],
  templateUrl: './note-card.component.html',
  styleUrl: './note-card.component.scss',
})
export class NoteCardComponent {
  @Input() title!: string;
  @Input() body!: string;
  @Input() index!: number;

  constructor(private routes: Router, private notesService: NotesService) {}

  onDelete() {
    console.log('Delete note', this.index);
    this.notesService.delete(this.index);
  }

  onCardClick() {
    this.routes.navigateByUrl('/' + this.index);
  }
}
