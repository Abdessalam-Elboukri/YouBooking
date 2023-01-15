import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-owner-layout',
  templateUrl: './owner-layout.component.html',
  styleUrls: ['./owner-layout.component.css']
})
export class OwnerLayoutComponent implements OnInit {


  constructor( private storageService:StorageService, private router:Router) { }

  ngOnInit(): void {
    if(this.storageService.isLoggedIn()){
        if (!(this.storageService.getAuthority() == "OWNER")) {
          this.router.navigate(["login"]);
        }
    }
  }

}
