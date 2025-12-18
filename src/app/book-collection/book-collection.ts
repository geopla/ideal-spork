import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Book} from '../books.model';

@Component({
  selector: 'app-book-collection',
  imports: [],
  templateUrl: './book-collection.html',
  styleUrl: './book-collection.css',
})
export class BookCollection {
  @Input() books: ReadonlyArray<Book> = []
  @Output() remove = new EventEmitter<string>()
}
