import { Component, output, signal } from '@angular/core';
import { customError, Field, FieldState, form, maxLength, minLength, required, schema, submit, validate } from '@angular/forms/signals';

import { Book } from '../../shared/book';

export const formSchema = schema<Book>((fieldPath) => {
  required(fieldPath.title);
  required(fieldPath.isbn);
  minLength(fieldPath.isbn, 13);
  maxLength(fieldPath.isbn, 13);
  validate(fieldPath.authors, ({ value }) =>
    !value().some((a) => a)
      ? customError({ kind: 'atLeastOneAuthor' })
      : undefined
  );
  required(fieldPath.description);
  required(fieldPath.imageUrl);
});

@Component({
  selector: 'app-book-form',
  imports: [Field],
  templateUrl: './book-form.html',
  styleUrl: './book-form.scss'
})
export class BookForm {
  readonly submitBook = output<Book>();

  private readonly book = signal({
    isbn: "",
    title: "",
    subtitle: "",
    authors: [""],
    description: "",
    imageUrl: "",
    createdAt: new Date().toISOString(),
  } satisfies Book);
  protected readonly f = form(this.book, formSchema);

  addAuthorControl() {
    this.f.authors().value.update((authors) => [...authors, '']);
  }

  isInvalid(field: FieldState<unknown>) {
    if (!field.touched()) {
      return null;
    }
    return field.invalid() && field.touched();
  }

  async submitForm(e: Event) {
    e.preventDefault();

    await submit(this.f, async (form) => {
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
