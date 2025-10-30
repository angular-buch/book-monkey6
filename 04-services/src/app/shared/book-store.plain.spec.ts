import { BookStore } from './book-store';
import { Book } from './book';

describe('BookStore', () => {
  let service: BookStore;

  beforeEach(() => {
    service = new BookStore();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of books', () => {
    const books = service.getAll();

    // Optional: Wir können die Bücher auch noch intensiver prüfen
    // Zum Beispiel:
    // expect(books[0].isbn).toBe('12345');
    // expect(books[1].title).toBe('Backen mit Affen');
    expect(books.length).toBeGreaterThan(0);
  });
});
