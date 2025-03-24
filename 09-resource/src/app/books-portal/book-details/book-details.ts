import { Component, inject, input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

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
  readonly book = this.#store.getOneBook(this.isbn);

  deleteBook(isbn: string) {
    if (window.confirm('Delete book?')) {
      this.#store.deleteBook(isbn).subscribe(() => {
        this.#router.navigateByUrl('/books');
      });
    }
  }
}
