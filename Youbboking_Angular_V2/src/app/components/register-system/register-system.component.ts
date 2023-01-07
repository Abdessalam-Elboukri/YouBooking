import { Component } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register-system',
  templateUrl: './register-system.component.html',
  styleUrls: ['./register-system.component.sass']
})
export class RegisterSystemComponent {

  user:User = new User();
  constructor(private authservice : AuthService ){}


  userRegister(){
    console.log(this.user);
    this.authservice.loginUser(this.user).subscribe
  }

}
