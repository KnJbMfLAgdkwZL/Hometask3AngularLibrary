import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../../interfaces/book";
import {ShowHideModalBookService} from "../../services/show-hide-modal-book.service";

@Component({
  selector: 'app-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.css']
})
export class BookListItemComponent implements OnInit {
  @Input() book!: Book;

  constructor(public showHideModalBookService: ShowHideModalBookService) {
  }

  ngOnInit(): void {
  }

  onClickShow() {
    this.showHideModalBookService.display = !this.showHideModalBookService.display;
  }

  onClickEdit() {
  }
}
