import { Component, output, signal } from '@angular/core';
import { Field, form, submit } from '@angular/forms/signals';

import { Book } from '../../shared/book';
@Component({
  selector: 'app-book-form',
  imports: [Field],
  templateUrl: './book-form.html',
  styleUrl: './book-form.scss'
})
export class BookForm {
  readonly submitBook = output<Book>();

  readonly #book = signal({
    isbn: '',
    title: '',
    subtitle: '',
    authors: [''],
    description: '',
    imageUrl: '',
    createdAt: new Date().toISOString(),
  } satisfies Book);
  protected readonly bookForm = form(this.#book);

  addAuthorControl() {
    this.bookForm.authors().value.update((authors) => [...authors, '']);
  }

  async submitForm(e: Event) {
    e.preventDefault();

    await submit(this.bookForm, async (form) => {
      const formValue = form().value();
      const authors = formValue.authors.filter(author => !!author);

      const newBook: Book = {
        ...formValue,
        authors,
        createdAt: new Date().toISOString()
      };
      this.submitBook.emit(newBook);
    });
  }
}
