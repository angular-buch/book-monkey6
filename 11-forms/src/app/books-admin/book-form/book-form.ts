import { Component, output } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { Book } from '../../shared/book';

@Component({
  selector: 'app-book-form',
  imports: [ReactiveFormsModule],
  templateUrl: './book-form.html',
  styleUrl: './book-form.scss'
})
export class BookForm {
  readonly submitBook = output<Book>();

  protected bookForm = new FormGroup({
    isbn: new FormControl('', { nonNullable: true }),
    title: new FormControl('', { nonNullable: true }),
    subtitle: new FormControl('', { nonNullable: true }),
    description: new FormControl('', { nonNullable: true }),
    authors: new FormArray([
      new FormControl('', { nonNullable: true })
    ]),
    imageUrl: new FormControl('', { nonNullable: true })
  });

  addAuthorControl() {
    this.bookForm.controls.authors.push(
      new FormControl('', { nonNullable: true })
    );
  }

  submitForm() {
    const formValue = this.bookForm.getRawValue();
    const authors = formValue.authors.filter(author => !!author);

    const newBook: Book = {
      ...formValue,
      authors,
      createdAt: new Date().toISOString()
    };

    this.submitBook.emit(newBook);
  }
}
