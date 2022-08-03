import {Component} from '@angular/core';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent {

  Id: number = 0;
  Title: string = '';
  Cover: string = '';
  Content: string = '';
  Author: string = '';
  Genre: string = '';

  onSubmit() {
    let str = `Id: ${this.Id}
    Title: ${this.Title}
    Cover: ${this.Cover}
    Content: ${this.Content}
    Author: ${this.Author}
    Genre: ${this.Genre}`
    alert(str)
  }

  OnClickClear() {
    this.Id = 0
    this.Title = this.Cover = this.Content = this.Author = this.Genre = ""
  }
}
