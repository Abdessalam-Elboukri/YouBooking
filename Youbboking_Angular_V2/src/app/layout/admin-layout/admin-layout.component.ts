import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  isLoggedIn = false;

  constructor( private storageService:StorageService, private router:Router) { }

  ngOnInit(): void {
    if(!this.storageService.isLoggedIn()){
      this.isLoggedIn = false;
      this.router.navigate(["login"]);
    }
    console.log(this.storageService.getUser().sub);
  }

}
