import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-room-card',
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.css']
})
export class RoomCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  private _statPrice="";
  @Input()
  get statPrice(): string{
    return this._statPrice;
  }
  set statPrice(statPrice:string){
    this._statPrice = statPrice === undefined ? "" : statPrice;
  }

  private _statDesc="";
  @Input()
  get statDesc(): string{
    return this._statDesc;
  }
  set statDesc(statDesc:string){
    this._statDesc = statDesc === undefined ? "" : statDesc;
  }

  private _statHotel="";
  @Input()
  get statHotel(): string{
    return this._statHotel;
  }
  set statHotel(statHotel:string){
    this._statHotel = statHotel === undefined ? "" : statHotel;
  }

  private _statId="";
  @Input()
  get statId(): string{
    return this._statId;
  }
  set statId(statId:string){
    this._statId = statId === undefined ? "" : statId;
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
