import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Room } from 'src/app/models/room.model';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-room-by-hotel',
  templateUrl: './room-by-hotel.component.html',
  styleUrls: ['./room-by-hotel.component.css']
})
export class RoomByHotelComponent implements OnInit {
  id_hotel!:number;
  rooms!:any;

  constructor(private roomService:RoomService,private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id_hotel=this.activateRoute.snapshot.params['id']
    this.roomService.getRommsByHotel(this.id_hotel).subscribe((res)=>{
      console.log(res);
      this.rooms=res
    })
  }

}
