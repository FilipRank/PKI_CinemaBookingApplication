import { Component } from '@angular/core';
import { MaterialModule } from '../material-module';
import { User, UserService } from '../services/user.service';
import { FormsModule } from '@angular/forms';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    MaterialModule,
    FormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  providers: [UserService]
})
export class RegisterComponent {
  email: string = "";
  password: string = "";
  name: string = "";
  surname: string = "";
  phoneNumber: string = "";
  address: string = "";
  favouriteGenre: string = "";

  constructor(private userService: UserService) {}

  onRegisterPress() {
    this.userService.registerUser({
      id: Number(`${Date.now()}${Math.floor(Math.random() * 1e6)}`.slice(-10)).toString(),
      email: this.email,
      password: this.password,
      name: this.name,
      surname: this.surname,
      phoneNumber: this.phoneNumber,
      favouriteGenres: this.favouriteGenre,
      address: this.address,
      basket: []
    }).subscribe();
  }
}
