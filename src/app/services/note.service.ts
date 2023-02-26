import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../interfaces/note';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  constructor(private _http: HttpClient) {}

  getNote(id: number): Observable<Note> {
    return this._http.get<Note>(`https://localhost:7268/api/Note/${id}`);
  }

  getNotes(): Observable<Note[]> {
    return this._http.get<Note[]>('https://localhost:7268/api/Note');
  }

  addNote(request: Note): Observable<Note> {
    return this._http.post<Note>('https://localhost:7268/api/Note', {
      title: request.title,
      description: request.description,
    });
  }
}
