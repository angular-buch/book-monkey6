import { inject, Injectable, Resource, Signal } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { rxResource } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';

import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {
  #http = inject(HttpClient);
  #apiUrl = 'https://api6.angular-buch.com';

  getBookList(searchTerm: Signal<string>): Resource<Book[]> {
    return rxResource({
      request: searchTerm,
      loader: () => this.#http.get<Book[]>(this.#apiUrl + '/books', {
        params: new HttpParams().set('search', searchTerm())
      }),
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

  createBook(book: Book): Observable<Book> {
    return this.#http.post<Book>(`${this.#apiUrl}/books`, book);
  }
}
