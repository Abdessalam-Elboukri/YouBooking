import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-all-hotels',
  templateUrl: './all-hotels.component.html',
  styleUrls: ['./all-hotels.component.css']
})
export class AllHotelsComponent implements OnInit {

  hotels :any
  constructor(private hotelService: HotelService) {
  }

  ngOnInit(): void {
    this.hotelService.getAllHotels().subscribe((res)=>{
      this.hotels=res
    })
  }





}
