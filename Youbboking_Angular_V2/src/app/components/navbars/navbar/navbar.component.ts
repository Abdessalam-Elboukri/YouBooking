import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private storageService:StorageService ) { }

  status=false;
  ngOnInit(): void {
    if(this.storageService.isLoggedIn()){
      this.status=true;
    }
  }

}
