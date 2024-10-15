import { Injectable } from "@angular/core";
import { User } from "./user.service";

export interface Review {
    id: number,
    user: string,
    comment: string,
    rating: 1 | 2 | 3 | 4 | 5,
    publishedAt: string,
    edited: boolean
}

@Injectable()
export class ReviewService {
}