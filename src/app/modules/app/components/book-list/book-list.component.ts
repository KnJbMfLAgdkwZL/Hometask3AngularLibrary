import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Book} from "../../interfaces/book";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  @Input() recommended: boolean = false;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getBooks()
  }

  getBooks(): void {
    if (this.recommended) {
      this.http.get<Book[]>('https://localhost:5000/api/recommended')
        .subscribe(Response => {
          this.books = Response.reverse();
        })
    } else {
      this.http.get<Book[]>('https://localhost:5000/api/books')
        .subscribe(Response => {
          this.books = Response;
        })
    }
  }
}
