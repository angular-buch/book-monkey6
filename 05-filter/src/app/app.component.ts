import { Component } from '@angular/core';

import { BookListComponent } from './books-portal/book-list/book-list.component';

@Component({
  selector: 'app-root',
  imports: [BookListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
