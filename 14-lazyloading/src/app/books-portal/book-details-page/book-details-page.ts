import { Component, inject, input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

import { BookStore } from '../../shared/book-store';
import { IsbnFormatPipe } from '../../shared/isbn-format.pipe';

@Component({
  selector: 'app-book-details-page',
  imports: [RouterLink, DatePipe, IsbnFormatPipe],
  templateUrl: './book-details-page.html',
  styleUrl: './book-details-page.scss'
})
export class BookDetailsPage {
  #bookStore = inject(BookStore);
  #router = inject(Router);

  readonly isbn = input.required<string>();
  readonly book = this.#bookStore.getSingle(this.isbn);

  removeBook(isbn: string) {
    if (window.confirm('Delete book?')) {
      this.#bookStore.remove(isbn).subscribe(() => {
        this.#router.navigateByUrl('/books');
      });
    }
  }
}
