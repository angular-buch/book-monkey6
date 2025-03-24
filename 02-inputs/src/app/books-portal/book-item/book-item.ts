import { Component, input } from '@angular/core';

import { Book } from '../../shared/book';

@Component({
  selector: 'app-book-item',
  imports: [],
  templateUrl: './book-item.ng.html',
  styleUrl: './book-item.scss'
})
export class BookItem {
  readonly book = input.required<Book>();
}
