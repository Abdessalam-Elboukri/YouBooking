import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Hotel } from "../models/hotel.model";



@Injectable({
  providedIn :'root'
})
export class HotelService{

  constructor(private http:HttpClient ){}

  private base_url = environment.base_url;

  getAllHotels():Observable<any>{
    return this.http.get(this.base_url+"admin/all_hotels")
  }
  getAllAprovedHotels():Observable<any>{
    return this.http.get(this.base_url+"approved_hotels")
  }
  getHotelsByOwner(user:String):Observable<any>{
    return this.http.get(this.base_url+"your-Hotels/"+user)
  }
  getSelectedHotel(id_hotel:Number):Observable<any>{
    return this.http.get(this.base_url+"hotel/"+id_hotel)
  }
  addHotel(hotel:FormData):Observable<any>{
    return this.http.post(this.base_url+"add_hotel",hotel)
  }
  updateHotel(hotel:Hotel,id:Number):Observable<any>{
    return this.http.post(this.base_url+"update_hotel/"+id,hotel)
  }

  updateHotelStatus(id:Number):Observable<any>{
    return this.http.get(this.base_url+"hotel_status/"+id)
  }

}


