import { Component, effect, inject, input, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

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
  #router = inject(Router);

  readonly isbn = input.required<string>();
  readonly book = signal<Book | undefined>(undefined);

  constructor() {
    effect(() => {
      this.#store.getOneBook(this.isbn()).subscribe(book => {
        this.book.set(book);
      });
    });
  }

  deleteBook(isbn: string) {
    if (window.confirm('Delete book?')) {
      this.#store.deleteBook(isbn).subscribe(() => {
        this.#router.navigateByUrl('/books');
      });
    }
  }
}
