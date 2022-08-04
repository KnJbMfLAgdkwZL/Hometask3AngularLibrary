import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Book} from "../Dto/book";
import {lastValueFrom, Subject, tap, Observable} from "rxjs";
import {BookDetail} from "../Dto/book-detail";
import {Id} from "../Dto/id";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl: string = 'https://localhost:5000/api'
  private _refreshRequired = new Subject<void>();

  get RefreshRequired() {
    return this._refreshRequired;
  }

  constructor(private http: HttpClient) {
  }

  GetRecommended(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseUrl}/recommended`);
  }

  GetBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseUrl}/books`);
  }

  async GetBookDetail(id: number): Promise<BookDetail> {
    return await lastValueFrom(this.http.get<BookDetail>(`${this.baseUrl}/books/${id}`));
  }

  PostBookSave(book: BookDetail) {
    return this.http.post<Id>(`${this.baseUrl}/books/save`, book).pipe(
      tap(() => {
        this.RefreshRequired.next();
      })
    );
  }
}
