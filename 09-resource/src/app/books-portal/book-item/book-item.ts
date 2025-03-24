import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Book } from '../../shared/book';

@Component({
  selector: 'app-book-item',
  imports: [RouterLink],
  templateUrl: './book-item.ng.html',
  styleUrl: './book-item.scss'
})
export class BookItem {
  readonly book = input.required<Book>();
  readonly like = output<Book>();

  likeBook() {
    this.like.emit(this.book());
  }
}
