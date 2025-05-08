import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookStore {
  #http = inject(HttpClient);
  #apiUrl = 'https://api6.angular-buch.com';

  getAll(): Observable<Book[]> {
    return this.#http.get<Book[]>(`${this.#apiUrl}/books`);
  }

  getSingle(isbn: string): Observable<Book> {
    return this.#http.get<Book>(`${this.#apiUrl}/books/${isbn}`);
  }

  remove(isbn: string): Observable<void> {
    return this.#http.delete<void>(`${this.#apiUrl}/books/${isbn}`);
  }
}
