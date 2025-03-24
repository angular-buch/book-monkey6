import { Component } from '@angular/core';

import { BookList } from './books-portal/book-list/book-list';

@Component({
  selector: 'app-root',
  imports: [BookList],
  templateUrl: './app.ng.html',
  styleUrl: './app.scss'
})
export class App {}
