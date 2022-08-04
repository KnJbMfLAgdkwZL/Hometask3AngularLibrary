import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Book} from "../Dto/book";
import {lastValueFrom} from "rxjs";
import {BookDetail} from "../Dto/book-detail";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl: string = 'https://localhost:5000/api'

  constructor(private http: HttpClient) {
  }

  async GetRecommended(): Promise<Book[]> {
    return await lastValueFrom(this.http.get<Book[]>(`${this.baseUrl}/recommended`));
  }

  async GetBooks(): Promise<Book[]> {
    return await lastValueFrom(this.http.get<Book[]>(`${this.baseUrl}/books`));
  }

  async GetBookDetail(id: number): Promise<BookDetail> {
    return await lastValueFrom(this.http.get<BookDetail>(`${this.baseUrl}/books/${id}`));
  }
}
