import {Observable, of} from 'rxjs';
import {Book} from './books.model';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: "root"})
export class DiscworldBooksService {

  constructor(private httpClient: HttpClient) {
  }

  getBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>('http://localhost:3000/books')
  }

  // --- replaced by HTTP call
  // getBooks(): Observable<Array<Book>> {
  //   let books: Array<Book> = [
  //     {
  //       id: "1",
  //       volumeInfo: {
  //         title: 'Guards!Guards!',
  //         authors: ['Terry Pratchett']
  //       }
  //     },
  //     {
  //       id: "2",
  //       volumeInfo: {
  //         title: 'Men at Arms',
  //         authors: ['Terry Pratchett']
  //       }
  //     },
  //     {
  //       id: "3",
  //       volumeInfo: {
  //         title: 'Feet of Clay',
  //         authors: ['Terry Pratchett']
  //       }
  //     }
  //   ]
  //
  //   return of(books);
  // }
}
