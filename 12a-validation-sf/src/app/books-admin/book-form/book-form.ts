import { Component, output, signal } from '@angular/core';
import { Control, FieldState, form, maxLength, minLength, required, schema, submit, validate, ValidationError } from '@angular/forms/signals';

import { Book } from '../../shared/book';

export const formSchema = schema<Book>((fieldPath) => {
  required(fieldPath.title);
  required(fieldPath.isbn);
  minLength(fieldPath.isbn, 13);
  maxLength(fieldPath.isbn, 13);
  validate(fieldPath.authors, ({ value }) =>
    !value().some((a) => a)
      ? ValidationError.custom({ kind: 'atLeastOneAuthor' })
      : undefined
  );
  required(fieldPath.description);
  required(fieldPath.imageUrl);
})

@Component({
  selector: 'app-book-form',
  imports: [Control],
  templateUrl: './book-form.html',
  styleUrl: './book-form.scss'
})
export class BookForm {
  readonly submitBook = output<Book>();

  protected readonly f = form(signal<Book>({
    isbn: "",
    title: "",
    subtitle: "",
    authors: [""],
    description: "",
    imageUrl: "",
    createdAt: new Date().toISOString(),
  }), formSchema);

  addAuthorControl() {
    this.f.authors().value.update((authors) => [...authors, '']);
  }

  isInvalid(field: FieldState<string | string[]>) {
    if (!field.touched()) {
      return null;
    }
    return !field.valid() && field.touched();
  }

  async submitForm(e: Event) {
    e?.preventDefault();

    await submit(this.f, async (form) => {
      const formValue = this.f().value();
      const authors = this.f.authors().value().filter(author => !!author);

      const newBook: Book = {
        ...formValue,
        authors,
        createdAt: new Date().toISOString()
      };
      this.submitBook.emit(newBook);
    });
  }
}
