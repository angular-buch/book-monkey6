import { Component, output } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { Book } from '../../shared/book';

@Component({
  selector: 'app-book-form',
  imports: [ReactiveFormsModule],
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.scss'
})
export class BookFormComponent {
  submitBook = output<Book>();

  bookForm = new FormGroup({
    isbn: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(13),
      ]
    }),
    title: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    subtitle: new FormControl('', {
      nonNullable: true
    }),
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

  isInvalid(control: FormControl) {
    if (!control.touched) {
      return null;
    }
    return control.invalid && control.touched;
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
