import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login.model';
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

  login:Login = new Login();
  constructor(private authservice : AuthService , private storageService : StorageService,private router:Router){}

  ngOnInit(): void {
    if(this.storageService.isLoggedIn()){
      this.isLoggedIn = true;
      this.router.navigate([""]);

    }
  }

  userLogin(){
      this.authservice.login(this.login).subscribe((res:any)=>{
        //localStorage.setItem("token",res)
        this.storageService.saveUser(res)

        const role=this.storageService.getUser().authorities[0].authority;
        if(role=="OWNER"){
          this.router.navigate(["all_hotels"])
        }
        else if(role=="ADMIN"){
          this.router.navigate(["our-rooms"])
        }
        else{
          this.router.navigate([""])
        }
      })}

   reloadPage(): void {
    window.location.reload();
  }

}
