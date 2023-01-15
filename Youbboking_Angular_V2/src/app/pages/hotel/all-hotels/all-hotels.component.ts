import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-all-hotels',
  templateUrl: './all-hotels.component.html',
  styleUrls: ['./all-hotels.component.css']
})
export class AllHotelsComponent implements OnInit {

  hotels :any
  constructor(private hotelService: HotelService, private storageService:StorageService) {
  }

  ngOnInit(): void {
    //if(this.storageService.getUser().authorities[0].authority == "ADMIN"){
    this.hotelService.getAllHotels().subscribe((res)=>{
      this.hotels=res
    })
  //}
  }




}
