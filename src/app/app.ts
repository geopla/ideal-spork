import {Component, OnInit} from '@angular/core';
import {BookList} from './book-list/book-list';
import {selectBookCollection, selectBooks} from './state/books.selector';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Book} from './books.model';
import {AsyncPipe} from '@angular/common';
import {BookApiActions, BooksActions} from './state/books.actions';
import {BookCollection} from './book-collection/book-collection';
import {DiscworldBooksService} from './books';

@Component({
  selector: 'app-root',
  imports: [
    BookList,
    AsyncPipe,
    BookCollection,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  books$: Observable<readonly Book[]>
  bookCollection$: Observable<readonly Book[]>;

  constructor(
    private store: Store,
    private booksService: DiscworldBooksService
  ) {
    this.books$ = this.store.select(selectBooks)
    this.bookCollection$ = this.store.select(selectBookCollection)
  }

  ngOnInit(): void {
    this.store.dispatch(BookApiActions.loadBooks())
  }

  onAdd(bookId: string) {
    this.store.dispatch(BooksActions.addBook({bookId}))
  }

  onRemove(bookId: string) {
    this.store.dispatch(BooksActions.removeBook({bookId}))
  }
}
