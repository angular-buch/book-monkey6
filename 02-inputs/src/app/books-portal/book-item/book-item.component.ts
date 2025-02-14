import { Component, input } from '@angular/core';

import { Book } from '../../shared/book';

@Component({
  selector: 'app-book-item',
  imports: [],
  templateUrl: './book-item.component.html',
  styleUrl: './book-item.component.scss'
})
export class BookItemComponent {
  readonly book = input.required<Book>();
}
