import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { BookFormComponent } from '../book-form/book-form.component';
import { BookStoreService } from '../../shared/book-store.service';
import { Book } from '../../shared/book';

@Component({
  selector: 'app-book-create',
  imports: [BookFormComponent],
  templateUrl: './book-create.component.html',
  styleUrl: './book-create.component.scss'
})
export class BookCreateComponent {
  #service = inject(BookStoreService);
  #router = inject(Router);

  create(book: Book) {
    this.#service.createBook(book).subscribe(createdBook => {
      this.#router.navigate(['/books', 'details', createdBook.isbn]);
    });
  }
}
