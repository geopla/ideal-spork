import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { isDevMode } from '@angular/core';

import { routes } from './app.routes';
import {provideStore} from '@ngrx/store';
import {booksReducer} from './state/books.reducer';
import {collectionReducer} from './state/collection.reducer';
import {provideStoreDevtools} from '@ngrx/store-devtools';
import {provideHttpClient} from '@angular/common/http';
import {provideEffects} from '@ngrx/effects';
import {BooksEffects} from './state/books.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideStore({
      books: booksReducer,
      collection: collectionReducer
    }),
    provideEffects(BooksEffects),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode() }),
    provideHttpClient()
  ]
}
