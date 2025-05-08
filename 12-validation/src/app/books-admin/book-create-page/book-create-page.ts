import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { BookForm } from '../book-form/book-form';
import { BookStore } from '../../shared/book-store';
import { Book } from '../../shared/book';

@Component({
  selector: 'app-book-create-page',
  imports: [BookForm],
  templateUrl: './book-create-page.html',
  styleUrl: './book-create-page.scss'
})
export class BookCreatePage {
  #bookStore = inject(BookStore);
  #router = inject(Router);

  createBook(book: Book) {
    this.#bookStore.create(book).subscribe(createdBook => {
      this.#router.navigate(['/books', 'details', createdBook.isbn]);
    });
  }
}
