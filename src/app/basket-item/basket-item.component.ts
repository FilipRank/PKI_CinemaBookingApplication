import { Component, Input } from '@angular/core';
import { MaterialModule } from '../material-module';
import { Production } from '../services/production.service';

@Component({
  selector: 'app-basket-item',
  standalone: true,
  imports: [
    MaterialModule
  ],
  templateUrl: './basket-item.component.html',
  styleUrl: './basket-item.component.css'
})
export class BasketItemComponent {
  @Input() basketItem: Production;
}
