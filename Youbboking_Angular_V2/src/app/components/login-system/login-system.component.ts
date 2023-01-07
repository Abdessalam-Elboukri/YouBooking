import { Component,OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import {AuthService} from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-login-system',
  templateUrl: './login-system.component.html',
  styleUrls: ['./login-system.component.sass']
})
export class LoginSystemComponent implements OnInit {

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  role!: '';

  user:User = new User();
  constructor(private authservice : AuthService , private storageService : StorageService){}

  ngOnInit(): void {
    console.log("true");

    if(this.storageService.isLoggedIn()){
      this.isLoggedIn = true;
      this.role = this.storageService.getUser().role
    }
  }

  userLogin(){
    console.log(this.user);
    this.authservice.loginUser(this.user).subscribe({
      next: data => {
        this.storageService.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.role = this.storageService.getUser().role;
        this.reloadPage();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });}

   reloadPage(): void {
    window.location.reload();
  }

}
