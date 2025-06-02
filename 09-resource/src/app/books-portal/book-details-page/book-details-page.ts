import { Component, inject, input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

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
  protected book = this.#bookStore.getSingle(this.isbn);

  removeBook(isbn: string) {
    if (window.confirm('Delete book?')) {
      this.#bookStore.remove(isbn).subscribe(() => {
        this.#router.navigateByUrl('/books');
      });
    }
  }
}
