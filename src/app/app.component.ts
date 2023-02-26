import { Component } from '@angular/core';
import { Note } from './interfaces/note';
import { NoteService } from './services/note.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'notes-app';

  constructor(private _note: NoteService) {}

  getNotes() {
    this._note.getNotes().subscribe({
      next: (v) => console.log(v),
      error: (e) => console.log(e),
      complete: () => console.log('Request completed'),
    });
  }

  addNote() {
    this._note
      .addNote({ title: 'Test', description: 'Opis notatki' })
      .subscribe({
        next: (v) => console.log(v),
        error: (e) => console.log(e),
        complete: () => console.log('Request completed'),
      });
  }
}
