import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { Book } from '../../shared/book';
import { BookStore } from '../../shared/book-store';

@Component({
  selector: 'app-book-details-page',
  imports: [RouterLink],
  templateUrl: './book-details-page.html',
  styleUrl: './book-details-page.scss'
})
export class BookDetailsPage {
  #bookStore = inject(BookStore);
  #route = inject(ActivatedRoute);

  readonly book = signal<Book | undefined>(undefined);

  constructor() {
    const isbn = this.#route.snapshot.paramMap.get('isbn');
    if (isbn) {
      this.book.set(this.#bookStore.getSingle(isbn));
    }
  }
}
