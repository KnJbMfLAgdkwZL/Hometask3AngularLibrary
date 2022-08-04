import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../../Dto/book";
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  @Input() recommended: boolean = false;

  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
    this.getBooks()
    this.api.RefreshRequired.subscribe(() => {
      this.getBooks()
    })
  }

  getBooks(): void {
    if (this.recommended) {
      this.api.GetRecommended().subscribe(result => {
        this.books = result.reverse();
      });
    } else {
      this.api.GetBooks().subscribe(result => {
        this.books = result;
      });
    }
  }
}
