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

  readonly books = this.#store.getBookList();
  readonly likedBooks = signal<Book[]>([]);

  readonly filteredBooks = computed(() => {
    if (!this.searchTerm()) {
      return this.books.value();
    }

    const term = this.searchTerm().toLowerCase();
    return this.books.value().filter((b) => b.title.toLowerCase().includes(term));
  });

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
