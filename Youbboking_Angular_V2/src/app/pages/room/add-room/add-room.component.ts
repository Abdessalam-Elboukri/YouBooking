import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { Room } from 'src/app/models/room.model';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit {

  room :Room
  id_hotel!:number

  constructor(private roomService:RoomService, private activateRoute:ActivatedRoute) {
    this.room=new Room();
  }

  ngOnInit(): void {
  }

  addRoom(form : NgForm){
    this.id_hotel=this.activateRoute.snapshot.params['id']
    this.roomService.addRoom(this.id_hotel,this.room).subscribe((res)=>{

    })
  }

}
