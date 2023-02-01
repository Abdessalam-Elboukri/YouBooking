import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login.model';
import { User } from 'src/app/models/user.model';
import {AuthService} from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-login-system',
  templateUrl: './login-system.component.html',
  styleUrls: ['./login-system.component.sass']
})
export class LoginSystemComponent implements OnInit {

  isLoggedIn = false;

  login:Login = new Login();
  constructor(private authservice : AuthService ,private userService:UserService, private storageService : StorageService,private router:Router){}

  ngOnInit(): void {
    if(this.storageService.isLoggedIn()){
      this.isLoggedIn = true;
      this.router.navigate([""]);

    }
  }

  ownerStatus!:boolean;
  message="";

  userLogin(){
      this.authservice.login(this.login).subscribe((res:any)=>{
        const user = this.userService.getOneUser(this.login.email).
        subscribe((result)=>{
          if(result.role.roleName==="OWNER"){
            if(!(result.status=='ACTIVE')){
              this.ownerStatus=false;
              this.message="Your Account Not Active ! Contact Admin"
            }else{
              this.storageService.saveUser(res)
              this.router.navigate(["your_hotels"])
            }
        }
        else if(result.roleName==="ADMIN"){
          this.storageService.saveUser(res)
          this.router.navigate(["all_hotels"])
        }
        else{
          this.storageService.saveUser(res)
          this.router.navigate([""])
        }
      })})
}
}
