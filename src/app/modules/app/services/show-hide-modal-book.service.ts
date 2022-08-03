import {Injectable} from '@angular/core';
import {Book} from "../interfaces/book";

@Injectable({
  providedIn: 'root'
})
export class ShowHideModalBookService {
  public display: boolean = false
  public book!: Book;

  constructor() {
  }
}
