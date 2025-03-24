import { Component, computed, inject, signal } from '@angular/core';

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

  readonly searchTerm = signal('');

  readonly books = signal<Book[]>([]);
  readonly likedBooks = signal<Book[]>([]);

  readonly filteredBooks = computed(() => {
    if (!this.searchTerm()) {
      return this.books();
    }

    const term = this.searchTerm().toLowerCase();
    return this.books().filter((b) => b.title.toLowerCase().includes(term));
  });

  constructor() {
    this.books.set(this.#store.getBookList());
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
