import { Component, computed, inject, signal } from '@angular/core';

import { Book } from '../../shared/book';
import { BookItemComponent } from '../book-item/book-item.component';
import { BookStoreService } from '../../shared/book-store.service';

@Component({
  selector: 'app-book-list',
  imports: [BookItemComponent],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss',
})
export class BookListComponent {
  #service = inject(BookStoreService);

  readonly searchTerm = signal('');

  readonly books = this.#service.getBookList();
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
