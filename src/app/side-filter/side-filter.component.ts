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
    FormsModule
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

  constructor(private productionService: ProductionService) {}

  onKeyUp() {
    this.productionService.getProductionsWithParams(
      {
        "title_like": this.title,
        "description_like": this.description,
        "directors_like": this.director,
        "cast_like": this.cast
      }
    )
    .subscribe((productions: Production[]) => {
      this.filterUpdate.emit(productions);
    });
  }
}
