import {Review} from "./review";

export class BookDetail {
  id: number = 0
  title: string = ''
  author: string = ''
  cover: string = ''
  rating: string = ''
  content: string = ''
  genre: string = ''
  reviews: Review[] = []
}
