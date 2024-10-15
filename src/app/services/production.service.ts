import { Injectable } from "@angular/core";
import { Review } from "./review.service";
import { ConfigService } from "../app.config";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export interface Production {
  id: number,
  title: string,
  description: string,
  genre: "action" | "adventure" | "comedy" | "historical" | "drama" | "other",
  durationInHours: number,
  directors: Array<string>
  cast: Array<string>
  publishedAt: string
  airingTimes: Array<string>
  ticketCurrency: { currency: "RSD" | "EUR" | "GBP" | "USD", amount: number }
  reviews: Array<string>
  poster: string
}

@Injectable()
export class ProductionService {

  constructor(private http: HttpClient) {}

  getAllProductions(): Observable<Production[]> {
    return this.http.get<Production[]>("http://localhost:3000/productions");
  }

  getProductionById(id: number): Observable<Production> {
    return this.http.get<Production>(`http://localhost:3000/productions/${id}`);
  }

  async getProductionReviews(production: Production): Promise<Review[]> {
    let reviews: Review[] = []

    if (production.reviews.length === 0) {
      return reviews;
    }
    for (let reviewUrl of production.reviews) {
      let response = await fetch(reviewUrl);
      let review = await response.json();
      reviews.push(review);
    }
    reviews.sort((a, b) => a.id - b.id);
    return reviews;
  }
}