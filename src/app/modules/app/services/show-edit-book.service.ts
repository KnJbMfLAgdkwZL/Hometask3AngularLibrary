import {Injectable} from '@angular/core';
import {BookDetail} from "../Dto/book-detail";

@Injectable({
  providedIn: 'root'
})
export class ShowEditBookService {
  public display: boolean = false
  public book!: BookDetail;
  public bookEdit!: BookDetail;

  public title: string = '1212'


  constructor() {
  }
}
