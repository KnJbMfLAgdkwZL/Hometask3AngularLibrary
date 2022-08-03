import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Book} from "../interfaces/book";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getBooks()
  }

  books: Book[] = [];

  getBooks(): void {
    this.http.get<Book[]>('https://localhost:5000/api/books')
      .subscribe(Response => {
        this.books = Response;
      })
  }

}


