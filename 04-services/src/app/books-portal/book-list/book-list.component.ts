import { Component, inject, signal } from '@angular/core';

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

  readonly books = signal<Book[]>([]);
  readonly likedBooks = signal<Book[]>([]);

  constructor() {
    this.books.set(this.#service.getBookList());
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
