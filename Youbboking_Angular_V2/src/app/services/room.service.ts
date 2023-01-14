import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Room } from "../models/room.model";



@Injectable({
  providedIn :'root'
})
export class RoomService{

  constructor(private http:HttpClient){}

  private base_url = environment.base_url;

  getAllRooms():Observable<any>{
    return this.http.get(this.base_url+"admin/all_rooms")
  }

  getRoomsByActiveHotel():Observable<any>{
    return this.http.get(this.base_url+"active-rooms")
  }

  getRommsByHotel(hotel_id:number):Observable<any>{
    return this.http.get(this.base_url+"rooms/"+hotel_id)
  }

  getSelectedRoom(id_hotel:Number):Observable<any>{
    return this.http.get(this.base_url+"hotel/"+id_hotel)
  }

  addRoom(id_hotel:number,room:Room):Observable<any>{
    return this.http.post(this.base_url+"hotel/add_room/"+id_hotel,room)
  }
  
  updateRoom(room:Room,id:Number):Observable<any>{
    return this.http.post(this.base_url+"update_hotel/"+id,room)
  }

}
