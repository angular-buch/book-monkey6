import { Component, effect, inject, input, linkedSignal, signal } from '@angular/core';
import { Router } from '@angular/router';

import { Book } from '../../shared/book';
import { BookItem } from '../book-item/book-item';
import { BookStore } from '../../shared/book-store';

@Component({
  selector: 'app-book-list',
  imports: [BookItem],
  templateUrl: './book-list.ng.html',
  styleUrl: './book-list.scss',
})
export class BookList {
  #store = inject(BookStore);
  #router = inject(Router);

  readonly search = input<string>();
  readonly searchTerm = linkedSignal(() => this.search() || '');

  readonly books = this.#store.getBookList(this.searchTerm);
  readonly likedBooks = signal<Book[]>([]);

  constructor() {
    effect(() => {
      this.#router.navigate([], {
        queryParams: {
          search: this.searchTerm() || null
        }
      });
    });
  }

  addLikedBook(newLikedBook: Book) {
    const foundBook = this.likedBooks().find(
      (b) => b.isbn === newLikedBook.isbn
    );

    if (!foundBook) {
      this.likedBooks.update((likedBooks) => [...likedBooks, newLikedBook]);
    }
  }

  clearLikedBooks() {
    this.likedBooks.set([]);
  }
}
