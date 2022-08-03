import {Injectable} from '@angular/core';
import {BookDetail} from "../interfaces/book-detail";

@Injectable({
  providedIn: 'root'
})
export class ShowHideModalBookService {
  public display: boolean = false
  public book!: BookDetail;

  constructor() {
  }
}
