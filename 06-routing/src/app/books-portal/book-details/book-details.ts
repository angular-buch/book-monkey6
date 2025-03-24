import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { Book } from '../../shared/book';
import { BookStore } from '../../shared/book-store';

@Component({
  selector: 'app-book-details',
  imports: [RouterLink],
  templateUrl: './book-details.ng.html',
  styleUrl: './book-details.scss'
})
export class BookDetails {
  #store = inject(BookStore);
  #route = inject(ActivatedRoute);

  readonly book = signal<Book | undefined>(undefined);

  constructor() {
    const isbn = this.#route.snapshot.paramMap.get('isbn');
    if (isbn) {
      this.book.set(this.#store.getOneBook(isbn));
    }
  }
}
