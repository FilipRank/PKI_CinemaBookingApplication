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

@Component({
  selector: 'app-production-card-list',
  standalone: true,
  imports: [
    ProductionCardComponent,
    MaterialModule
  ],
  templateUrl: './production-card-list.component.html',
  styleUrl: './production-card-list.component.css'
})
export class ProductionCardListComponent implements OnInit {
  productions: Production[] = [];
  @Output() filterButtonClick = new EventEmitter<string>();

  constructor(private productionService: ProductionService) {}

  emitFilterButtonClick() {
    this.filterButtonClick.emit("");
  }

  onFilterUpdate(productions: Production[]) {
    this.productions = productions;
  }

  ngOnInit() {
    this.productionService.getAllProductions().subscribe(production => {
      this.productions = production;
    });
  }
}
