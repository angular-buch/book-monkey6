import { Component, computed, inject, signal } from '@angular/core';

import { Book } from '../../shared/book';
import { BookCard } from '../book-card/book-card';
import { BookStore } from '../../shared/book-store';

@Component({
  selector: 'app-books-overview-page',
  imports: [BookCard],
  templateUrl: './books-overview-page.html',
  styleUrl: './books-overview-page.scss',
})
export class BooksOverviewPage {
  #bookStore = inject(BookStore);

  readonly searchTerm = signal('');

  readonly books = this.#bookStore.getAll();
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
