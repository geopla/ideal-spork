import {createActionGroup, emptyProps, props} from '@ngrx/store';
import {Book} from '../books.model';

export const BooksActions = createActionGroup({
    source: 'Books',
    events: {
      'Add Book': props<{ bookId: string }>(),
      'Remove Book': props<{ bookId: string }>(),
    },
  }
)

export const BookApiActions = createActionGroup({
  source: 'Books API',
  events: {
    'Load Books': emptyProps(),
    'Load Books Success': props<{ books: ReadonlyArray<Book> }>(),
    'Load Books Failure': props<{ error: any }>()
  }
})
