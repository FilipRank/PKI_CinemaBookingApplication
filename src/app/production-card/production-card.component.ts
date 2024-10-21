import { Component, Input } from '@angular/core';
import { MaterialModule } from '../material-module';
import { Production } from '../services/production.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-production-card',
  standalone: true,
  imports: [
    MaterialModule
  ],
  templateUrl: './production-card.component.html',
  styleUrl: './production-card.component.css',
  providers: [
    UserService
  ]
})
export class ProductionCardComponent {
  @Input() production: Production;

  constructor(private userService: UserService, private router: Router) {}

  onAddTicketToCartClick() {
    if (!sessionStorage.getItem('active')) {
      this.router.navigate([])
    }
    this.userService.getCurrentUser().subscribe((currentUser) => {
      let newBasketItem = {
        production: `http://localhost:3000/productions/${this.production.id}`,
        airsAt: this.production.airingTimes[0],
        status: "reserved",
        amount: 1
      };
      this.userService.addToCartByUserId(parseInt(sessionStorage.getItem('active') as string), newBasketItem);
    });
  }
}
