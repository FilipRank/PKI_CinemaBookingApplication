import { Component } from '@angular/core';
import { MaterialModule } from '../material-module';
import { SideFilterComponent } from '../side-filter/side-filter.component';
import { ProductionCardListComponent } from '../production-card-list/production-card-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MaterialModule,
    SideFilterComponent,
    ProductionCardListComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
