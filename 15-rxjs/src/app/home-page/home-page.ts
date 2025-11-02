import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Field, form } from '@angular/forms/signals';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { filter, debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs';

import { BookStore } from '../shared/book-store';

@Component({
  selector: 'app-home-page',
  imports: [Field, RouterLink],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HomePage {
  #bookStore = inject(BookStore);

  protected searchTerm = signal('');
  protected searchField = form(this.searchTerm);
  protected isLoading = signal(false);

  protected results = toSignal(
    toObservable(this.searchTerm).pipe(
      filter(term => term.length >= 3),
      debounceTime(500),
      distinctUntilChanged(),
      tap(() => this.isLoading.set(true)),
      switchMap(term => this.#bookStore.search(term)),
      tap(() => this.isLoading.set(false)),
    ),
    { initialValue: [] }
  );
}
