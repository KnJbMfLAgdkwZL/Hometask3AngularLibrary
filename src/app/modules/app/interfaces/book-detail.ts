import {Review} from "./review";

export interface BookDetail {
  id: number
  title: string
  author: string
  cover: string
  rating: string
  content: string
  reviews: Review[]
}
