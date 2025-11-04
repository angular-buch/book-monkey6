import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';

import { routes } from '../app.routes';
import { HomePage } from './home-page';

describe('HomePage Routing', () => {
  it('should load the HomePage component for /home', async () => {
    TestBed.configureTestingModule({
      imports: [HomePage],
      providers: [provideRouter(routes)]
    });

    const harness = await RouterTestingHarness.create();
    const component = await harness.navigateByUrl('/home', HomePage);

    expect(component).toBeTruthy();
    expect(document.title).toBe('BookMonkey');
  });
});
