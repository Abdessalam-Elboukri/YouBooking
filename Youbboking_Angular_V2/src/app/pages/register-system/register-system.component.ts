import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { RoleService } from 'src/app/services/role.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-register-system',
  templateUrl: './register-system.component.html',
  styleUrls: ['./register-system.component.sass']
})
export class RegisterSystemComponent implements OnInit {
  roles:any;
  user:User = new User();
  constructor(private authservice : AuthService,private router:Router, private roleService:RoleService,private storageService:StorageService){}

  ngOnInit(): void {
    this.roleService.getRoles().subscribe((res)=>{
      console.log(res)
      this.roles = res;
    })
  }


  userRegister(form:NgForm){
    console.log(this.user);
    this.authservice.register(this.user).subscribe((res)=>{
      this.storageService.clean();
      this.router.navigate(["login"])
    })
  }

}
