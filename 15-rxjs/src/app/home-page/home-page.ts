import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs';

import { BookStore } from '../shared/book-store';

@Component({
  selector: 'app-home-page',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './home-page.ng.html',
  styleUrl: './home-page.scss'
})
export class HomePage {
  #store = inject(BookStore);

  searchControl = new FormControl('', { nonNullable: true });
  readonly isLoading = signal(false);

  readonly results = toSignal(
    this.searchControl.valueChanges.pipe(
      filter(term => term.length >= 3),
      debounceTime(500),
      distinctUntilChanged(),
      tap(() => this.isLoading.set(true)),
      switchMap(term => this.#store.searchBooks(term)),
      tap(() => this.isLoading.set(false)),
    ),
    { initialValue: [] }
  );
}
