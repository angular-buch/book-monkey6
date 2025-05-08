import { Component, effect, inject, input, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

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
  #router = inject(Router);

  readonly isbn = input.required<string>();
  readonly book = signal<Book | undefined>(undefined);

  constructor() {
    effect(() => {
      this.#bookStore.getSingle(this.isbn()).subscribe(book => {
        this.book.set(book);
      });
    });
  }

  removeBook(isbn: string) {
    if (window.confirm('Delete book?')) {
      this.#bookStore.remove(isbn).subscribe(() => {
        this.#router.navigateByUrl('/books');
      });
    }
  }
}
