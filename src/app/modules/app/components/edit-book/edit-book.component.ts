import {Component, ElementRef, Inject, ViewChild} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {ShowEditBookService} from "../../services/show-edit-book.service";
import {BookDetail} from "../../Dto/book-detail";
import {FormBuilder, FormGroup, ValidationErrors, Validators} from "@angular/forms";

import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent {
  @ViewChild("imageUrl") imageUrl!: ElementRef;
  public bookForm!: FormGroup;

  constructor(
    @Inject(DOCUMENT) private _document: Document,
    private fb: FormBuilder,
    private api: ApiService,
    public showEditBook: ShowEditBookService
  ) {
    this.bookForm = this.fb.group({
      Title: ['Title', [Validators.required, Validators.min(1)]],
      Genre: ['Genre', [Validators.required]],
      Author: ['Author', [Validators.required]],
      Content: ['Content', [Validators.required]],
      Cover: ['Cover', [Validators.required]]
    })
  }

  OnClickClear() {
    this.showEditBook.bookEdit = new BookDetail()
    this.imageUrl.nativeElement.value = "";
  }

  getFormErrors(form: FormGroup) {
    const result: any = [];
    Object.keys(form.controls).forEach(key => {
      const formProperty = form.get(key)
      if (!(formProperty && formProperty.errors)) return
      if (formProperty instanceof FormGroup) result.push(...this.getFormErrors(formProperty))
      const controlErrors: ValidationErrors = formProperty.errors
      Object.keys(controlErrors).forEach(keyError => result.push(`${key}: ${keyError}`))
    })
    return result;
  }

  onSubmit() {
    if (this.bookForm.invalid) {
      alert(this.getFormErrors(this.bookForm))
    } else {
      this.api.PostBookSave(this.showEditBook.bookEdit).subscribe(result => {
        this.OnClickClear()
        alert(`Ok ID: ${result.id}`)
      })
    }
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
