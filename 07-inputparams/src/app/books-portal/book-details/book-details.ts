import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { BookStore } from '../../shared/book-store';

@Component({
  selector: 'app-book-details',
  imports: [RouterLink],
  templateUrl: './book-details.ng.html',
  styleUrl: './book-details.scss'
})
export class BookDetails {
  #store = inject(BookStore);

  readonly isbn = input.required<string>();
  readonly book = computed(() => this.#store.getOneBook(this.isbn()));
}
