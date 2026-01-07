import {App} from './app';
import {render, screen} from '@testing-library/angular';
import {HttpTestingController, provideHttpClientTesting} from '@angular/common/http/testing';
import {provideHttpClient} from '@angular/common/http';
import {provideStore} from '@ngrx/store';
import {booksReducer} from './state/books.reducer';
import {collectionReducer} from './state/collection.reducer';
import {provideEffects} from '@ngrx/effects';
import {BooksEffects} from './state/books.effects';

describe('App', () => {

  it('should show a list of books to select from', async () => {
    const { fixture } = await render(App, {
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideStore({
          books: booksReducer,
          collection: collectionReducer
        }),
        provideEffects(BooksEffects),
      ]
    })
    const httpController = fixture.debugElement.injector.get(HttpTestingController)

    // is there a HTTP request?
    const req = httpController.expectOne('http://localhost:3000/books')

    // ... then mock the response
    req.flush([{
      id: '42',
      volumeInfo: {
        title: 'The Long Earth',
        authors: [
          'Steven Baxter', 'Terry Pratchett'
        ]
      }
    }])

    // complete all asynchronous tasks
    await fixture.whenStable()

    // and trigger changes in component
    fixture.detectChanges()

    expect(screen.getByText('The Long Earth')).toBeDefined();
  })

})
