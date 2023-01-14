import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-all-rooms',
  templateUrl: './all-rooms.component.html',
  styleUrls: ['./all-rooms.component.css']
})
export class AllRoomsComponent implements OnInit {

  rooms:any
  constructor(private roomService:RoomService) { }

  ngOnInit(): void {
    this.rooms=this.roomService.getRoomsByActiveHotel().subscribe((res)=>{
      this.rooms=res
    });
  }

}
