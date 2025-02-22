import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  #http = inject(HttpClient);
  #apiUrl = 'https://api6.angular-buch.com';

  getBookList(): Observable<Book[]> {
    return this.#http.get<Book[]>(`${this.#apiUrl}/books`);
  }

  getOneBook(isbn: string): Observable<Book> {
    return this.#http.get<Book>(`${this.#apiUrl}/books/${isbn}`);
  }

  deleteBook(isbn: string): Observable<unknown> {
    return this.#http.delete(`${this.#apiUrl}/books/${isbn}`);
  }
}
