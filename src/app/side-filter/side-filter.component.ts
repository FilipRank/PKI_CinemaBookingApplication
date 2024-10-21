import { Component, EventEmitter, Output, signal } from '@angular/core';
import { MaterialModule } from '../material-module';
import { FormsModule } from '@angular/forms';
import { Production, ProductionService } from '../services/production.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-side-filter',
  standalone: true,
  imports: [
    MaterialModule,
    FormsModule,
  ],
  templateUrl: './side-filter.component.html',
  styleUrl: './side-filter.component.css'
})
export class SideFilterComponent {
  readonly panelOpenState = signal(false);
  @Output() filterUpdate = new EventEmitter<Production[]>();
  title: string = "";
  description: string = "";
  director: string = "";
  cast: string = "";
  durationHoursMinimum: number;
  durationMinutesMinimum: number;
  durationHoursMaximum: number;
  durationMinutesMaximum: number;
  publishedAtStart: Date;
  publishedAtEnd: Date;
  minPrice: number;
  maxPrice: number;
  airingTimeStart: Date;
  airingTimeEnd: Date;
  constructor(private productionService: ProductionService) {}

  onKeyUp() {
    this.productionService.getProductionsWithParams(
      {
        "title_like": this.title,
        "description_like": this.description,
        "directors_like": this.director,
        "cast_like": this.cast,
        "durationInHours_gte":
        (this.durationHoursMinimum + (this.durationMinutesMinimum/60 || 0)) || "",
        "durationInHours_lte":
        (this.durationHoursMaximum + (this.durationMinutesMaximum/60 || 0)) || "", 
        "publishedAt_gte":
        this.publishedAtStart ? this.publishedAtStart.toISOString() : "",
        "publishedAt_lte":
        this.publishedAtStart ? this.publishedAtEnd.toISOString() : "",
        "ticketPrice.amount_gte": this.minPrice,
        "ticketPrice.amount_lte": this.maxPrice,
        "airingTimes_gte":
        this.publishedAtStart ? this.airingTimeStart.toISOString() : "",
        "airingTimes_lte":
        this.publishedAtStart ? this.airingTimeEnd.toISOString() : ""
      }
    )
    .subscribe((productions: Production[]) => {
      this.filterUpdate.emit(productions);
    });
  }
}
