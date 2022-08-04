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

  async ngOnInit(): Promise<void> {
    await this.getBooks()
  }

  async getBooks(): Promise<void> {
    if (this.recommended) {
      this.books = await this.api.GetRecommended();
    } else {
      this.books = await this.api.GetBooks();
    }
  }
}
