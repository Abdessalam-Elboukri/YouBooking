import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Youbboking_Angular_V2';




  constructor(
    private storageService: StorageService,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {

  }

  
}
