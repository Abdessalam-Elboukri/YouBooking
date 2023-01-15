import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { FileHandler } from 'src/app/models/fileHandler';
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

  onFileChanged(event:any) {
    if(event.target.files){
      const file = event.target.files[0];
      const fileHandler : FileHandler ={
        file : file
      }
      this.room.roomImage=fileHandler;
    }
  }

  prepareFormData(room:Room): FormData{
    const formData = new FormData();

    formData.append('roomData',
                    new Blob([JSON.stringify(room)],{type:'application/json'}));

    formData.append('image',
                    room.roomImage.file,
                    room.roomImage.file.name);

    return formData;

  }

  addRoom(form : NgForm){
    if(form.valid){
      console.log("starting upload image ...")
      const hotelFormData=this.prepareFormData(this.room);
    this.id_hotel=this.activateRoute.snapshot.params['id']
    this.roomService.addRoom(this.id_hotel,hotelFormData).subscribe((res)=>{

    })
  }
  }

}
