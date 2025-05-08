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

  getAll(): HttpResourceRef<Book[]> {
    return httpResource<Book[]>(
      () => `${this.#apiUrl}/books`,
      { defaultValue: [] }
    );
  }

  getSingle(isbn: Signal<string>): HttpResourceRef<Book | undefined> {
    return httpResource<Book>(
      () => `${this.#apiUrl}/books/${isbn()}`
    );
  }

  remove(isbn: string): Observable<void> {
    return this.#http.delete<void>(`${this.#apiUrl}/books/${isbn}`);
  }
}
