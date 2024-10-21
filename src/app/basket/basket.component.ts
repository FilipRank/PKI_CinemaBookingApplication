import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../material-module';
import { BasketItemComponent } from "../basket-item/basket-item.component";
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

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
  
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    if (!this.userService.hasActiveUser()) {
      this.router.navigate(["/login"]);
    }
  }
}
