import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-nav-secondary',
  templateUrl: './nav-secondary.component.html',
  styleUrls: ['./nav-secondary.component.css']
})
export class NavSecondaryComponent implements OnInit {

  constructor(private storageService:StorageService ) { }

  status=false;
  ngOnInit(): void {
    if(this.storageService.isLoggedIn()){
      this.status=true;
    }
  }

}
