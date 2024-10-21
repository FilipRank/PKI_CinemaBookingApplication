import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MaterialModule } from './material-module';
import { ProductionService, Production } from './services/production.service';
import { ProductionCardComponent } from "./production-card/production-card.component";
import { ProductionCardListComponent } from "./production-card-list/production-card-list.component";
import { Review } from './services/review.service';
import { concat, switchMap } from 'rxjs';
import { SideFilterComponent } from "./side-filter/side-filter.component";
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MaterialModule,
    ProductionCardComponent,
    ProductionCardListComponent,
    SideFilterComponent,
    ScrollingModule,
    HomeComponent,
    RouterModule
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [
    ProductionService
  ]
})
export class AppComponent {
  title = 'tempAngular';

  constructor() { }

}
