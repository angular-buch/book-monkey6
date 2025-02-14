import { Component, effect, inject, input, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { Book } from '../../shared/book';
import { BookStoreService } from '../../shared/book-store.service';

@Component({
  selector: 'app-book-details',
  imports: [RouterLink],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss'
})
export class BookDetailsComponent {
  #service = inject(BookStoreService);
  #router = inject(Router);

  readonly isbn = input.required<string>();
  readonly book = signal<Book | undefined>(undefined);

  constructor() {
    effect(() => {
      this.#service.getOneBook(this.isbn()).subscribe(book => {
        this.book.set(book);
      });
    });
  }

  deleteBook(isbn: string) {
    if (window.confirm('Delete book?')) {
      this.#service.deleteBook(isbn).subscribe(() => {
        this.#router.navigateByUrl('/books');
      });
    }
  }
}
