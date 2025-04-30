import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { BookForm } from '../book-form/book-form';
import { BookStore } from '../../shared/book-store';
import { Book } from '../../shared/book';

@Component({
  selector: 'app-book-create',
  imports: [BookForm],
  templateUrl: './book-create.html',
  styleUrl: './book-create.scss'
})
export class BookCreate {
  #store = inject(BookStore);
  #router = inject(Router);

  create(book: Book) {
    this.#store.createBook(book).subscribe(createdBook => {
      this.#router.navigate(['/books', 'details', createdBook.isbn]);
    });
  }
}
