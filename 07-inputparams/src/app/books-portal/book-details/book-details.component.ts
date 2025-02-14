import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { BookStoreService } from '../../shared/book-store.service';

@Component({
  selector: 'app-book-details',
  imports: [RouterLink],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss'
})
export class BookDetailsComponent {
  #service = inject(BookStoreService);

  readonly isbn = input.required<string>();
  readonly book = computed(() => this.#service.getOneBook(this.isbn()))
}
