import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-client-layout',
  templateUrl: './client-layout.component.html',
  styleUrls: ['./client-layout.component.css']
})
export class ClientLayoutComponent implements OnInit {

  constructor( private storageService:StorageService, private router:Router) { }

  ngOnInit(): void {
    // if(this.storageService.isLoggedIn()){
    //   this.isLoggedIn = false;
    //     if (!(this.storageService.getUser().sub =="CLIENT")) {
    //       this.router.navigate(["login"]);
    //     }
    // }
  }

}
