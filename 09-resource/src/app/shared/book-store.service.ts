import { inject, Injectable, Resource, Signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { rxResource } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';

import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {
  #http = inject(HttpClient);
  #apiUrl = 'https://api6.angular-buch.com';

  getBookList(): Resource<Book[]> {
    return rxResource({
      loader: () => this.#http.get<Book[]>(this.#apiUrl + '/books'),
      defaultValue: []
    });
  }

  getOneBook(isbn: Signal<string>): Resource<Book | undefined> {
    return rxResource({
      request: isbn,
      loader: () => this.#http.get<Book>(this.#apiUrl + '/books/' + isbn())
    });
  }

  deleteBook(isbn: string): Observable<unknown> {
    return this.#http.delete(this.#apiUrl + '/books/' + isbn);
  }
}
