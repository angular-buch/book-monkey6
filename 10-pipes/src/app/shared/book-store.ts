import { inject, Injectable, Signal } from '@angular/core';
import { HttpClient, httpResource, HttpResourceRef } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookStore {
  #http = inject(HttpClient);
  #apiUrl = 'https://api6.angular-buch.com';

  getBookList(): HttpResourceRef<Book[]> {
    return httpResource<Book[]>(
      `${this.#apiUrl}/books`,
      { defaultValue: [] }
    );
  }

  getOneBook(isbn: Signal<string>): HttpResourceRef<Book | undefined> {
    return httpResource<Book>(
      () => `${this.#apiUrl}/books/${isbn()}`
    );
  }

  deleteBook(isbn: string): Observable<unknown> {
    return this.#http.delete(`${this.#apiUrl}/books/${isbn}`);
  }
}
