import { Injectable } from "@angular/core";
import { Review } from "./review.service";

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
    ticketCurrency: {currency: "RSD" | "EUR" | "GBP" | "USD", amount: number}
    reviews: Array<string>
    poster: string
}

@Injectable()
export class ProductionService {
   
    async getAllProductions(): Promise<Production[]> {
        let response = await fetch("http://localhost:3000/productions");
        return await response.json() ?? [];
    }

    async getProductionById(id: number): Promise<Production> {
        let response = await fetch(`http://localhost:3000/productions?id=${id}`);
        return await response.json();
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