import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DiscworldBooksService } from '../books';
import { BookApiActions } from './books.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class BooksEffects {
  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookApiActions.loadBooks),
      mergeMap(() =>
        this.booksService.getBooks().pipe(
          map(books => BookApiActions.loadBooksSuccess({ books })),
          catchError(error => of(BookApiActions.loadBooksFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private booksService: DiscworldBooksService
  ) {}
}
