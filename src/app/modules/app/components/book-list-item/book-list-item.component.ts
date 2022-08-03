import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../../interfaces/book";

@Component({
  selector: 'app-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.css']
})
export class BookListItemComponent implements OnInit {
  @Input() book!: Book;

  ngOnInit(): void {
  }

  onClickShow() {
  }

  onClickEdit() {
  }
}
