import {Component, OnInit} from '@angular/core';
import {ShowHideModalBookService} from "../../services/show-hide-modal-book.service";

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {
  constructor(public showHideModalBookService: ShowHideModalBookService) {
  }

  ngOnInit(): void {
  }

  CloseClick() {
    this.showHideModalBookService.display = !this.showHideModalBookService.display;
  }
}
