import { Component, inject, input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

import { BookStoreService } from '../../shared/book-store.service';

@Component({
  selector: 'app-book-details',
  imports: [RouterLink, DatePipe],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss'
})
export class BookDetailsComponent {
  #service = inject(BookStoreService);
  #router = inject(Router);

  readonly isbn = input.required<string>();
  readonly book = this.#service.getOneBook(this.isbn);

  deleteBook(isbn: string) {
    if (window.confirm('Delete book?')) {
      this.#service.deleteBook(isbn).subscribe(() => {
        this.#router.navigateByUrl('/books');
      });
    }
  }
}
