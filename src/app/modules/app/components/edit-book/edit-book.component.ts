import {Component, ElementRef, ViewChild} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {ShowEditBookService} from "../../services/show-edit-book.service";
import {BookDetail} from "../../Dto/book-detail";

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent {
  constructor(private api: ApiService, public showEditBook: ShowEditBookService) {
  }

  onSubmit() {
  }

  @ViewChild("imageUrl") imageUrl!: ElementRef;

  OnClickClear() {
    this.showEditBook.bookEdit = new BookDetail()
    this.imageUrl.nativeElement.value = "";
  }

  handleInputChange(e: any) {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    const pattern = /image-*/;
    const reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  _handleReaderLoaded(e: any) {
    let reader = e.target;
    this.showEditBook.bookEdit.cover = reader.result;
  }
}
