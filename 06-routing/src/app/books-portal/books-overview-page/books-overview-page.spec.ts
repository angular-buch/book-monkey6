import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';

import { booksPortalRoutes } from '../books-portal.routes';
import { BooksOverviewPage } from './books-overview-page';

describe('BooksOverviewPage Routing', () => {
  it('should load the BooksOverviewPage for /books', async () => {
    TestBed.configureTestingModule({
      imports: [BooksOverviewPage],
      providers: [provideRouter(booksPortalRoutes)]
    });

    const harness = await RouterTestingHarness.create();
    const component = await harness.navigateByUrl('/books', BooksOverviewPage);

    expect(component).toBeTruthy();
    expect(document.title).toBe('Books');
  });
});
