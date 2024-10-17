//@ts-nocheck

import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class QueryBuilderService {
  private productionQueryParams = {
    title_like: null,
    description_like: null,
    genre: null,
    durationInHours_gte: null,
    durationInHours_lte: null,
    cast_like: null,
    directors_like: null,
    publishedAt_gte: null,
    publishedAt_lte: null,
    "ticketPrice.amount_lte": null,
    "ticketPrice.amount_gte": null,
    airingTimes_gte: null,
    airingTimes_lte: null
  }

  buildArguments(params): string {
    const queryString = Object.keys(params)
    .filter((key) => params[key] !== undefined && params[key] !== null && params[key] !== "")
    .map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
    )
    .join("&");

    return queryString ? `?${queryString}` : "";
  }
}
