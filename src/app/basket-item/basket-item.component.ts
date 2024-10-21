import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MaterialModule } from '../material-module';
import { Production, ProductionService } from '../services/production.service';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-basket-item',
  standalone: true,
  imports: [
    MaterialModule,
    FormsModule
  ],
  templateUrl: './basket-item.component.html',
  styleUrl: './basket-item.component.css'
})
export class BasketItemComponent implements OnInit {
  @Input() basketItem: {production: string, airsAt: string, status: string, amount: number};
  production: Production;
  @Output() basketItemCreate = new EventEmitter<{production: Production, airsAt: string, status: string, amount: number}>();

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    if (this.basketItem) {
      this.http.get<Production>(this.basketItem.production).subscribe((production) => {
        this.production = production;
        this.basketItemCreate.emit({
          production: production,
          airsAt: this.basketItem.airsAt,
          status: this.basketItem.status,
          amount: this.basketItem.amount
        });
      });
    }
  }

}
