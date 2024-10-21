import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../material-module';
import { BasketItemComponent } from "../basket-item/basket-item.component";
import { User, UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { Production } from '../services/production.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-basket',
  standalone: true,
  imports: [
    MaterialModule,
    BasketItemComponent
],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.css',
  providers: [
    UserService
  ]
})
export class BasketComponent implements OnInit{
  basketItems: Array<{ production: string, airsAt: string, status: string, amount: number }> = []
  basketItemsMapped: Array<{ production: Production, airsAt: string, status: string, amount: number }> = []
  ticketPriceSum: number = 0

  constructor(private userService: UserService, private router: Router, private http: HttpClient) {}

  onBasketItemCreate(basketItemMapped: {production: Production, airsAt: string, status: string, amount: number}) {
    this.ticketPriceSum += basketItemMapped.production.ticketPrice.amount;
    this.basketItemsMapped.push(basketItemMapped);
  }

  ngOnInit() {
    if (!this.userService.hasActiveUser()) {
      this.router.navigate(["/login"]);
    }
    this.userService.getUserById(parseInt(sessionStorage.getItem('active') as string)).subscribe(
      (user: User) => {
        this.basketItems = user.basket
      }
    );
  }
}
