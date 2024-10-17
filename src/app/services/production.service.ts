import { Injectable } from "@angular/core";
import { Review } from "./review.service";
import { ConfigService } from "../app.config";
import { HttpClient } from "@angular/common/http";
import { forkJoin, Observable } from "rxjs";
import { QueryBuilderService } from "./queryBuilder.service";

export interface Production {
  id: number,
  title: string,
  description: string,
  genres: "action" | "adventure" | "comedy" | "historical" | "drama" | "epic" | "family" |"other",
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

  constructor(private http: HttpClient, private queryBuilderService: QueryBuilderService) {}

  getProductionsWithParams(params: Object): Observable<Production[]> {
    let paramsString = this.queryBuilderService.buildArguments(params);
    return this.http.get<Production[]>(`http://localhost:3000/productions/${paramsString}`)
  }

  getAllProductions(): Observable<Production[]> {
    return this.http.get<Production[]>("http://localhost:3000/productions");
  }

  getProductionById(id: number): Observable<Production> {
    return this.http.get<Production>(`http://localhost:3000/productions/${id}`);
  }

  getAllReviewsOfProduction(production: Production): Observable<Review[]> {
    let reviewRequests = production.reviews.map((reviewUrl: string) => {
      return this.http.get<Review>(reviewUrl)
    });

    return forkJoin(reviewRequests);
  }
}