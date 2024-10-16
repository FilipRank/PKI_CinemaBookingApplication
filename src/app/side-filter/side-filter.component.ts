import { Component, EventEmitter, Output, signal } from '@angular/core';
import { MaterialModule } from '../material-module';
import { FormsModule } from '@angular/forms';
import { Production } from '../services/production.service';
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

  constructor(private http: HttpClient) {}

  onKeyUp() {
    this.http.get<Production[]>(`http://localhost:3000/productions?title_like=${this.title}`)
    .subscribe((production: Production[]) => {
      this.filterUpdate.emit(production);
    });
  }
}
