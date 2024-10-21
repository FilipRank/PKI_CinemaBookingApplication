import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductionCardComponent } from "../production-card/production-card.component";
import { MatPaginatorModule } from '@angular/material/paginator';
import { Production, ProductionService } from '../services/production.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MaterialModule } from '../material-module';
import { filter } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-production-card-list',
  standalone: true,
  imports: [
    ProductionCardComponent,
    MaterialModule,
    FormsModule
  ],
  templateUrl: './production-card-list.component.html',
  styleUrl: './production-card-list.component.css'
})
export class ProductionCardListComponent implements OnInit {
  productions: Production[] = [];
  @Output() filterButtonClick = new EventEmitter<string>();
  quickSearchString: string = "";

  constructor(private productionService: ProductionService) {}

  emitFilterButtonClick() {
    this.filterButtonClick.emit("");
  }

  onFilterUpdate(productions: Production[]) {
    this.productions = productions;
  }

  onQuickSearchUpdate() {
    this.productionService.fullTextSearch(this.quickSearchString).subscribe((productions) => {
      this.productions = productions
    });
  }

  ngOnInit() {
    this.productionService.getAllProductions().subscribe(productions => {
      this.productions = productions;
    });
  }
}
