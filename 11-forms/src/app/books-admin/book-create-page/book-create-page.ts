import { Component, inject, signal } from '@angular/core';
import { Field, form, submit } from '@angular/forms/signals';
import { Router } from '@angular/router';

import { Book } from '../../shared/book';
import { BookStore } from '../../shared/book-store';

@Component({
  selector: 'app-book-create-page',
  imports: [Field],
  templateUrl: './book-create-page.html',
  styleUrl: './book-create-page.scss'
})
export class BookCreatePage {
  #bookStore = inject(BookStore);
  #router = inject(Router);

  readonly #book = signal<Required<Book>>({
    isbn: '',
    title: '',
    subtitle: '',
    authors: [''],
    description: '',
    imageUrl: '',
    createdAt: new Date().toISOString(),
  });
  protected readonly bookForm = form(this.#book);

  addAuthorField() {
    this.bookForm.authors().value.update((authors) => [...authors, '']);
  }

  async submitForm(e: SubmitEvent) {
    e.preventDefault();

    await submit(this.bookForm, async (form) => {
      const formValue = form().value();
      const authors = formValue.authors.filter(author => !!author);

      const newBook: Book = {
        ...formValue,
        authors,
        createdAt: new Date().toISOString()
      };
      this.#bookStore.create(newBook).subscribe(createdBook => {
        this.#router.navigate(['/books', 'details', createdBook.isbn]);
      });
    });
  }
}
