import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Book} from '../books.model';

@Component({
  selector: 'app-book-list',
  imports: [],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
})
export class BookList {
  @Input() books: ReadonlyArray<Book> = []
  @Output() add = new EventEmitter<string>()
}
