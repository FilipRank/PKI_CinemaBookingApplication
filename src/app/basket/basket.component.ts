import { Component } from '@angular/core';
import { MaterialModule } from '../material-module';
import { BasketItemComponent } from "../basket-item/basket-item.component";

@Component({
  selector: 'app-basket',
  standalone: true,
  imports: [
    MaterialModule,
    BasketItemComponent
],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.css'
})
export class BasketComponent {
  
}
