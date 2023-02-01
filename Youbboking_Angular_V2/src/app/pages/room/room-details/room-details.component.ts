import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Reservation } from 'src/app/models/resrvation.model';
import { Room } from 'src/app/models/room.model';
import { ReservationService } from 'src/app/services/reservation.service';
import { RoomService } from 'src/app/services/room.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent implements OnInit {


  room_id!:number;
  room:any;
  reservation: Reservation;
  errorStatus=false;

  constructor(private roomService:RoomService,private reservationService:ReservationService, private activateRoute:ActivatedRoute, private storageService:StorageService) {
    this.reservation=new Reservation();
   }


  ngOnInit(): void {
    this.room_id=this.activateRoute.snapshot.params['id']
    this.roomService.getSelectedRoom(this.room_id).subscribe((res)=>{
      this.room=res
    })

    // if(this.storageService.isLoggedIn() && this.storageService.getAuthority()=="CLIENT"){

    // }
  }

  prepareFormData(reserve:Reservation): FormData{
    const formData = new FormData();
    formData.append('reserveData',
                    new Blob([JSON.stringify(reserve)],{type:'application/json'}));
    formData.append('user',
                    this.storageService.getUserName() )
    return formData;

  }


  reserve(form : NgForm){
    if(!this.storageService.isLoggedIn() || !(this.storageService.getAuthority()=="CLIENT")){
      this.errorStatus=true
    }else{
      this.room_id=this.activateRoute.snapshot.params['id']
      const reserveFormData=this.prepareFormData(this.reservation);
      console.log(this.prepareFormData(this.reservation));

      this.reservationService.addResv(reserveFormData,this.room_id).subscribe((res)=>{
        console.log(res);

        console.log('successfuly reserved')
      })


    }
  }

























  // private _statId="";
  // @Input()
  // get statId(): string{
  //   return this._statId;
  // }
  // set statId(statId:string){
  //   this._statId = statId === undefined ? "" : statId;
  // }

  // private _statPrice="";
  // @Input()
  // get statPrice(): string{
  //   return this._statPrice;
  // }
  // set statPrice(statPrice:string){
  //   this._statPrice = statPrice === undefined ? "" : statPrice;
  // }

  // private _statDesc="";
  // @Input()
  // get statDesc(): string{
  //   return this._statDesc;
  // }
  // set statDesc(statDesc:string){
  //   this._statDesc = statDesc === undefined ? "" : statDesc;
  // }

  // private _statHotel="";
  // @Input()
  // get statHotel(): string{
  //   return this._statHotel;
  // }
  // set statHotel(statHotel:string){
  //   this._statHotel = statHotel === undefined ? "" : statHotel;
  // }

  // private _statImage="";
  // @Input()
  // get statImage(): string{
  //   return this._statImage;
  // }
  // set statImage(statImage:string){
  //   this._statImage = statImage === undefined ? "" : statImage;
  // }

  // private _statNumber="";
  // @Input()
  // get statNumber(): string{
  //   return this._statNumber;
  // }
  // set statNumber(statNumber:string){
  //   this._statNumber = statNumber === undefined ? "" : statNumber;
  // }

  // private _statBeds="";
  // @Input()
  // get statBeds(): string{
  //   return this._statBeds;
  // }
  // set statBeds(statBeds:string){
  //   this._statBeds = statBeds === undefined ? "" : statBeds;
  // }

}
