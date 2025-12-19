import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { isDevMode } from '@angular/core';

import { routes } from './app.routes';
import {provideStore} from '@ngrx/store';
import {booksReducer} from './state/books.reducer';
import {collectionReducer} from './state/collection.reducer';
import {provideStoreDevtools} from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideStore({
      books: booksReducer,
      collection: collectionReducer
    }),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode() }),
  ]
};
