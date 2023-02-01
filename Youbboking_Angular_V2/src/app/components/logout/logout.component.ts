import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authService:AuthService,private storageService:StorageService, private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
      this.storageService.clean();
      this.router.navigate(["/login"])
  }

}
