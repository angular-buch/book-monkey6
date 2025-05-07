import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookList } from './book-list';

describe('BookList', () => {

  let fixture: ComponentFixture<BookList>;
  let component: BookList;

  // Arrange
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookList);
    component = fixture.componentInstance;

  });

  it('should have a list of 2 books', () => {

    // Act
    // (Signal wird bereits im Konstruktor gesetzt)
    const books = component.books();

    // Assert
    expect(books.length).toBe(2);
    expect(books[0].title).toContain('Tierisch gut kochen');
    expect(books[1].title).toContain('Backen mit Affen');
  });

  it('should render the correct book titles in the DOM', () => {

    // Act
    // Durch detectChanges() wird das Template "gerendert"
    fixture.detectChanges();

    // Im gerenderten DOM nach dem Tag <article> suchen
    const compiledElement: HTMLElement = fixture.nativeElement;
    const articleEls = compiledElement.querySelectorAll('article');

    // Assert
    expect(articleEls.length).toBe(2);
    expect(articleEls[0].textContent).toContain('Tierisch gut kochen');
    expect(articleEls[1].textContent).toContain('Backen mit Affen');
  });

});
