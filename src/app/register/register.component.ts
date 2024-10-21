import { Component } from '@angular/core';
import { MaterialModule } from '../material-module';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    MaterialModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}
