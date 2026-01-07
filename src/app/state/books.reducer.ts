import {Book} from '../books.model';
import {createReducer, on} from '@ngrx/store';
import {BookApiActions} from './books.actions';


export const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
  initialState,

  // NOTE underscore is convention for unused parameter
  // NOTE {books} direct access of payload object property 'books'

  on(BookApiActions.loadBooksSuccess, (_state, { books }) => books)
)
