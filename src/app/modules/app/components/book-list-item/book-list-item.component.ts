import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../../interfaces/book";
import {ShowHideModalBookService} from "../../services/show-hide-modal-book.service";
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.css']
})
export class BookListItemComponent implements OnInit {
  @Input() book!: Book;

  constructor(private api: ApiService, public showHideModalBookService: ShowHideModalBookService) {
  }

  ngOnInit(): void {
  }

  async onClickShow() {
    this.showHideModalBookService.book = await this.api.GetBookDetail(this.book.id)
    this.showHideModalBookService.display = !this.showHideModalBookService.display;
  }

  onClickEdit() {
  }
}
