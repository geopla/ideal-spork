import {createReducer, on} from '@ngrx/store';
import {BooksActions} from './books.actions';


export const initialState: ReadonlyArray<string> = []

export const collectionReducer = createReducer(
  initialState,

  on(BooksActions.addBook,
    (state, {bookId}) => {
      if (state.indexOf(bookId) > -1) {
        // nuffin changed, no new instance required to honor purity
        return state;
      }

      return [...state, bookId]
    }
  ),

  on(BooksActions.removeBook,
    (state, {bookId}) =>
      state.filter((id) => id !== bookId)
  )
)
