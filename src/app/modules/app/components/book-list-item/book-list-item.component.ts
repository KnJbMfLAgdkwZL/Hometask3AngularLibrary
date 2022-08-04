import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../../Dto/book";
import {ShowEditBookService} from "../../services/show-edit-book.service";
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.css']
})
export class BookListItemComponent implements OnInit {
  @Input() book!: Book;

  constructor(private api: ApiService, public showEditBook: ShowEditBookService) {
  }

  ngOnInit(): void {
  }

  async onClickShow() {
    this.showEditBook.book = await this.api.GetBookDetail(this.book.id)
    this.showEditBook.display = !this.showEditBook.display;
  }

  async onClickEdit() {
    this.showEditBook.bookEdit = await this.api.GetBookDetail(this.book.id)
    this.showEditBook.title = this.showEditBook.bookEdit.title

  }
}
