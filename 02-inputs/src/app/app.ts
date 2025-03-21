import { Component } from '@angular/core';

import { BookListComponent } from './books-portal/book-list/book-list.component';

@Component({
  selector: 'app-root',
  imports: [BookListComponent],
  templateUrl: './app.ng.html',
  styleUrl: './app.scss'
})
export class App {}
