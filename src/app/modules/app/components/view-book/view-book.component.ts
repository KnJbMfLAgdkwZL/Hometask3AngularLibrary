import {Component, OnInit} from '@angular/core';
import {ShowEditBookService} from "../../services/show-edit-book.service";

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {
  constructor(public showEditBook: ShowEditBookService) {
  }

  ngOnInit(): void {
  }

  CloseClick() {
    this.showEditBook.display = false;
  }
}
