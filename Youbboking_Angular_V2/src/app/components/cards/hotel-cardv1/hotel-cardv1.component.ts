import { Component, Input, OnInit } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-hotel-cardv1',
  templateUrl: './hotel-cardv1.component.html',
  styleUrls: ['./hotel-cardv1.component.css']
})
export class HotelCardv1Component implements OnInit {

  constructor( private hotelService:HotelService) { }

  ngOnInit(): void {
  }


  updateStatus(id:number){
    this.hotelService.
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

  private _statId="";
  @Input()
  get statId(): string{
    return this._statId;
  }
  set statId(statId:string){
    this._statId = statId === undefined ? "" : statId;
  }

  private _statRole="";
  @Input()
  get statRole(): string{
    return this._statRole;
  }
  set statRole(statRole:string){
    this._statRole = statRole === undefined ? "" : statRole;
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
