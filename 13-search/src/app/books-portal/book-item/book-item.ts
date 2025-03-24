import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Book } from '../../shared/book';
import { IsbnFormatPipe } from '../../shared/isbn-format.pipe';

@Component({
  selector: 'app-book-item',
  imports: [RouterLink, IsbnFormatPipe],
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
