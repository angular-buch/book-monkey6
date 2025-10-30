import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCard } from './book-card';
import { Book } from '../../shared/book';
import { inputBinding, outputBinding } from '@angular/core';

describe('BookCard', () => {
  let fixture: ComponentFixture<BookCard>;
  let emittedBook: Book | undefined;

  const testBook: Book = {
    isbn: '1111',
    title: 'Testbuch',
    subtitle: 'Test',
    authors: ['Author 1', 'Author 2'],
    imageUrl: 'https://cdn.ng-buch.de/test.png',
    description: 'Dies ist ein Testbuch',
    createdAt: new Date().toISOString()
  };

  beforeEach(async () => {
    emittedBook = undefined;

    await TestBed.configureTestingModule({
      imports: [BookCard]
    }).compileComponents();

    fixture = TestBed.createComponent(BookCard, {
      bindings: [
        inputBinding('book', () => testBook),
        outputBinding('like', (book: Book) => emittedBook = book)
      ]
    });

    fixture.detectChanges();
  });

  it('should emit the like event with the correct book', () => {
    // Event manuell auslösen
    fixture.componentInstance.likeBook();

    // Prüfen, ob das Event ausgelöst wurde
    expect(emittedBook).toBeDefined();
    expect(emittedBook).toEqual(testBook);
  });
});
