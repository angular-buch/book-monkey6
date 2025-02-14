import { Component, effect, inject, input, linkedSignal, signal } from '@angular/core';
import { Router } from '@angular/router';

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
  #router = inject(Router);

  readonly search = input('');
  readonly searchTerm = linkedSignal(() => this.search() || '');

  readonly books = this.#service.getBookList(this.searchTerm);
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
