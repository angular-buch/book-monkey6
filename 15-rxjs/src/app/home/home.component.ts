import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { debounceTime, distinctUntilChanged, filter, switchMap, tap } from 'rxjs';

import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'app-home',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  #service = inject(BookStoreService);

  searchControl = new FormControl('', { nonNullable: true });
  readonly isLoading = signal(false);

  readonly results = toSignal(this.searchControl.valueChanges.pipe(
    filter(term => term.length >= 3),
    debounceTime(500),
    distinctUntilChanged(),
    tap(() => this.isLoading.set(true)),
    switchMap(term => this.#service.searchBooks(term)),
    tap(() => this.isLoading.set(false)),
  ), { initialValue: [] });
}
