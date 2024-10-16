import { Component, Input } from '@angular/core';
import { MaterialModule } from '../material-module';
import { Production } from '../services/production.service';

@Component({
  selector: 'app-production-card',
  standalone: true,
  imports: [
    MaterialModule
  ],
  templateUrl: './production-card.component.html',
  styleUrl: './production-card.component.css'
})
export class ProductionCardComponent {
  @Input() production: Production;
}
