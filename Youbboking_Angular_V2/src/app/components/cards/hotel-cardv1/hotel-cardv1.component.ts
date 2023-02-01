import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelService } from 'src/app/services/hotel.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-hotel-cardv1',
  templateUrl: './hotel-cardv1.component.html',
  styleUrls: ['./hotel-cardv1.component.css']
})
export class HotelCardv1Component implements OnInit {

  constructor( private hotelService:HotelService , private router:Router, private storageService:StorageService) { }

  ngOnInit(): void {
  }


  updateStatus(id:number){
    this.hotelService.updateHotelStatus(id).subscribe((rs)=>{
      console.log('status changed');
      this.refresh();
    })
  }



  refresh(): void {
    window.location.reload();
}

private _statRole=this.storageService.getAuthority();
  @Input()
  get statRole():string{
    return this._statRole
  }
  set statRole(statRole:string){
    this._statRole = statRole === undefined ? "" : statRole;
  }

  private _statName="";
  @Input()
  get statName(): string{
    return this._statName;
  }
  set statName(statName:string){
    this._statName = statName === undefined ? "" : statName;
  }

  private _statDesc="";
  @Input()
  get statDesc(): string{
    return this._statDesc;
  }
  set statDesc(statDesc:string){
    this._statDesc = statDesc === undefined ? "" : statDesc;
  }

  private _statPhone="";
  @Input()
  get statPhone(): string{
    return this._statPhone;
  }
  set statPhone(statPhone:string){
    this._statPhone = statPhone === undefined ? "" : statPhone;
  }

  private _statCountry="";
  @Input()
  get statCountry(): string{
    return this._statCountry;
  }
  set statCountry(statCountry:string){
    this._statCountry = statCountry === undefined ? "" : statCountry;
  }

  private _statCity="";
  @Input()
  get statCity(): string{
    return this._statCity;
  }
  set statCity(statCity:string){
    this._statCity = statCity === undefined ? "" : statCity;
  }

  private _statAddress="";
  @Input()
  get statAddress(): string{
    return this._statAddress;
  }
  set statAddress(statAddress:string){
    this._statAddress = statAddress === undefined ? "" : statAddress;
  }

  private _statCodePostal="";
  @Input()
  get statCodePostal(): string{
    return this._statCodePostal;
  }
  set statCodePostal(statCodePostal:string){
    this._statCodePostal = statCodePostal === undefined ? "" : statCodePostal;
  }

  private _statStatus="";
  @Input()
  get statStatus(): string{
    return this._statStatus;
  }
  set statStatus(statStatus:string){
    this._statStatus = statStatus === undefined ? "" : statStatus;
  }

  private _statId=0;
  @Input()
  get statId(): number{
    return this._statId;
  }
  set statId(statId:number){
    this._statId = statId === undefined ? 0 : statId;
  }

  private _statImage="";
  @Input()
  get statImage(): string{
    return this._statImage;
  }
  set statImage(statImage:string){
    this._statImage = statImage === undefined ? "" : statImage;
  }
}
