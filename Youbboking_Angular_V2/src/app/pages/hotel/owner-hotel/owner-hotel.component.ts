import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-owner-hotel',
  templateUrl: './owner-hotel.component.html',
  styleUrls: ['./owner-hotel.component.css']
})
export class OwnerHotelComponent implements OnInit {

  hotels : any
  user!:string
  constructor(private storageService:StorageService,private hotelService:HotelService) { }

  ngOnInit(): void {
    this.user=this.storageService.getUserName()
    this.hotelService.getHotelsByOwner(this.user).subscribe((res)=>{
      this.hotels=res
    })

  }

}
