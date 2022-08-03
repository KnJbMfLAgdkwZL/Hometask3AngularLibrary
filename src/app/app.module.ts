import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './modules/app/components/app/app.component';
import {BooksPageComponent} from './modules/app/components/books-page/books-page.component';
import {BookListComponent} from './modules/app/components/book-list/book-list.component';
import {BookListItemComponent} from './modules/app/components/book-list-item/book-list-item.component';
import {EditBookComponent} from './modules/app/components/edit-book/edit-book.component';
import {ViewBookComponent} from './modules/app/components/view-book/view-book.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    BooksPageComponent,
    BookListComponent,
    BookListItemComponent,
    EditBookComponent,
    ViewBookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
