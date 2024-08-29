import { Injectable, inject } from '@angular/core';
import { Note } from '../models/note.model';
import { LocalService } from './localService.service';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  private readonly localService = inject(LocalService);
  notes: Note[] = [
    {
      title: 'Note 1',
      body: 'This is the body of note 1',
    },
    {
      title: 'Note 2',
      body: 'This is the body of note 2',
    },
    {
      title: 'Note 3',
      body: 'This is the body of note 3 with the very long text that should be truncated This is the body of note 3 with the very long text that should be truncated This is the body of note 3 with the very long text that should be truncated This is the body of note 3 with the very long text that should be truncated This is the body of note 3 with the very long text that should be truncated This is the body of note 3 with the very long text that should be truncated This is the body of note 3 with the very long text that should be truncated This is the body of note 3 with the very long text that should be truncated ',
    },
    {
      title: 'Note 4',
      body: 'This is the body of note 4 ',
    },
    {
      title: 'Note 5',
      body: 'This is the body of note 5',
    },
  ];

  getAll() {
    let storedNotes = this.localService.getData('notes');
    if (storedNotes) {
      this.notes = JSON.parse(storedNotes);
    }
    return this.notes;
  }

  getAllFiltered(searchText: string) {
    let storedNotes = this.localService.getData('notes');
    if (storedNotes) {
      this.notes = JSON.parse(storedNotes);
    }
    if (searchText) {
      return this.notes.filter((note) => {
        return (
          note.title.toLowerCase().includes(searchText.toLowerCase()) ||
          note.body.toLowerCase().includes(searchText.toLowerCase())
        );
      });
    } else {
      return this.notes;
    }
  }

  get(id: number) {
    return this.notes[id];
  }

  getId(note: Note) {
    return this.notes.indexOf(note);
  }

  add(note: Note) {
    let newLength = this.notes.push(note);
    let index = newLength - 1;
    this.localService.saveData('notes', this.notes);

    return index;
  }

  update(id: number, note: Note) {
    this.notes[id] = note;
    this.localService.saveData('notes', this.notes);
  }

  delete(id: number) {
    this.notes.splice(id, 1);
    this.localService.saveData('notes', this.notes);
  }
}
