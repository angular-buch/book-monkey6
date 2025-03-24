import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookItem } from './book-item';

describe('BookItem', () => {
  let component: BookItem;
  let fixture: ComponentFixture<BookItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
