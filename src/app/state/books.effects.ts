import {inject, Injectable} from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DiscworldBooksService } from '../books';
import { BookApiActions } from './books.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class BooksEffects {
  private actions$ = inject(Actions)
  private booksService = inject(DiscworldBooksService)

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
}
