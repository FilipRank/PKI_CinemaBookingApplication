import { Component } from '@angular/core';
import { MaterialModule } from '../material-module';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MaterialModule,
    FormsModule,
    RouterModule,
    RouterOutlet
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [
    UserService,
  ]
})
export class LoginComponent {
  email: string = "";
  password: string = "";
  

  constructor(private userService: UserService) {}

  hasActiveUser() {
    return this.userService.hasActiveUser();
  }

  onLoginPress() {
    this.userService.login(this.email, this.password)
    .then()
    .catch(() => {this.email = "LOGIN FAILED"})
  }
}
